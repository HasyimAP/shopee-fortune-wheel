import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Default wheel configuration
const DEFAULT_WHEEL_CONFIG = [
  { value: 10000, weight: 10 },
  { value: 20000, weight: 5 },
  { value: 25000, weight: 4 },
  { value: 50000, weight: 2 },
  { value: 100000, weight: 1 },
];

// Store the current wheel configuration (in-memory, resets on server restart)
let currentWheelConfig = DEFAULT_WHEEL_CONFIG;

// Helper function to select weighted random value
function getWeightedRandomValue(config) {
  const totalWeight = config.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const item of config) {
    random -= item.weight;
    if (random <= 0) {
      return item.value;
    }
  }
  
  // Fallback to last item (should not happen)
  return config[config.length - 1].value;
}

// Wheel spin endpoint - returns weighted random value
app.post('/api/spin', (req, res) => {
  const randomValue = getWeightedRandomValue(currentWheelConfig);
  res.json({ value: randomValue });
});

// Set custom wheel configuration
app.post('/api/wheel-config', (req, res) => {
  const { config, useDefault } = req.body;
  
  if (useDefault) {
    currentWheelConfig = DEFAULT_WHEEL_CONFIG;
    res.json({ success: true, config: DEFAULT_WHEEL_CONFIG });
  } else if (config && Array.isArray(config)) {
    // Validate the configuration
    const isValid = config.every(item => 
      item.value && typeof item.value === 'number' && item.value > 0 &&
      item.weight && typeof item.weight === 'number' && item.weight > 0
    );
    
    if (isValid) {
      currentWheelConfig = config;
      res.json({ success: true, config: currentWheelConfig });
    } else {
      res.status(400).json({ success: false, error: 'Invalid configuration format' });
    }
  } else {
    res.status(400).json({ success: false, error: 'Invalid request' });
  }
});

// Get current wheel configuration
app.get('/api/wheel-config', (req, res) => {
  res.json({ config: currentWheelConfig });
});

// Get default wheel configuration
app.get('/api/wheel-config/default', (req, res) => {
  res.json({ config: DEFAULT_WHEEL_CONFIG });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
