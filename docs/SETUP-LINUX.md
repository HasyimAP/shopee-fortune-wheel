# 🐧 Linux Setup Guide - Couple Fun Games

This guide will walk you through setting up and running Couple Fun Games on Linux from scratch.

## Prerequisites Check

Before starting, check if you already have Node.js installed:

```bash
node --version
npm --version
```

If both commands show version numbers, you can skip to [Clone the Repository](#clone-the-repository).

## Step 1: Install Node.js and npm

### For Ubuntu/Debian-based distributions:

```bash
# Update package index
sudo apt update

# Install Node.js and npm (LTS version)
sudo apt install -y nodejs npm

# Verify installation
node --version
npm --version
```

### For Fedora/RHEL/CentOS:

```bash
# Install Node.js and npm
sudo dnf install -y nodejs npm

# Verify installation
node --version
npm --version
```

### For Arch Linux:

```bash
# Install Node.js and npm
sudo pacman -S nodejs npm

# Verify installation
node --version
npm --version
```

### Alternative: Using Node Version Manager (nvm) - Recommended

NVM allows you to install and manage multiple Node.js versions:

```bash
# Download and install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload your shell configuration
source ~/.bashrc
# or
source ~/.zshrc

# Install latest LTS version of Node.js
nvm install --lts

# Verify installation
node --version
npm --version
```

## Step 2: Install Git (if not already installed)

```bash
# For Ubuntu/Debian
sudo apt install -y git

# For Fedora/RHEL/CentOS
sudo dnf install -y git

# For Arch Linux
sudo pacman -S git

# Verify installation
git --version
```

## Step 3: Clone the Repository

```bash
# Navigate to your desired directory
cd ~

# Clone the repository
git clone https://github.com/HasyimAP/couple-fun-games.git

# Navigate into the project directory
cd couple-fun-games
```

## Step 4: Install Project Dependencies

```bash
# Install all required npm packages
npm install
```

This will download and install all the dependencies listed in `package.json`. It may take a few minutes.

## Step 5: Run the Application

### Option A: Run Frontend and Backend Together (Recommended)

```bash
npm run dev
```

This command will:
- Start the Express backend server on `http://localhost:3000`
- Start the Vite frontend dev server on `http://localhost:5173`

Your default browser should open automatically. If not, manually open your browser and navigate to:
```
http://localhost:5173
```

### Option B: Run Frontend and Backend Separately

If you prefer to run them in separate terminal windows:

**Terminal 1 - Backend Server:**
```bash
npm run server
```

**Terminal 2 - Frontend Dev Server:**
```bash
npm run client
```

## Step 6: Play the Games!

1. The homepage will display all available games
2. Select a game from the list
3. Follow the game-specific instructions
4. Have fun playing!

For detailed game rules and features, see the [individual game documentation](README.md#individual-game-documentation).

## Troubleshooting

### Port Already in Use

If you see an error like "Port 3000 already in use":

```bash
# Find the process using port 3000
sudo lsof -ti:3000

# Kill the process (replace PID with the actual process ID)
kill -9 <PID>

# Or use this one-liner
sudo lsof -ti:3000 | xargs kill -9
```

### Permission Denied Errors

If you encounter permission errors during `npm install`:

```bash
# Don't use sudo with npm, instead fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Now try installing again
npm install
```

### Dependencies Installation Fails

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

### Browser Doesn't Open Automatically

Simply open your browser manually and navigate to:
```
http://localhost:5173
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

To preview the production build:

```bash
npm run preview
```

## Stopping the Application

- If running with `npm run dev`: Press `Ctrl+C` in the terminal
- If running separately: Press `Ctrl+C` in each terminal window

## Additional Tips

### Running in the Background

To run the server in the background:

```bash
# Start backend in background
nohup npm run server > server.log 2>&1 &

# Start frontend in background
nohup npm run client > client.log 2>&1 &

# View logs
tail -f server.log
tail -f client.log
```

### Firewall Configuration

If you need to access the app from another device on your network:

```bash
# Allow ports 3000 and 5173
sudo ufw allow 3000
sudo ufw allow 5173

# Access from another device using your IP
# Find your IP address
ip addr show
# Then access: http://YOUR_IP:5173
```

## Next Steps

- Read the [main README](../README.md) for platform overview and quick start
- Read the [documentation index](README.md) for all documentation
- Explore individual game documentation
- Have fun playing! 🎮💕

## Getting Help

If you encounter any issues not covered here:
1. Check the [main README](../README.md) troubleshooting section
2. Look at the error messages carefully
3. Search for the error message online
4. Open an issue on GitHub with details about your problem

---

**Happy Gaming on Linux! 🐧🎮**
