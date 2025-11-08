import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Wheel spin endpoint - returns random value between 1k and 50k
app.get('/api/spin', (req, res) => {
  const values = [1000, 2000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  res.json({ value: randomValue });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
