# 🍎 macOS Setup Guide - Couple Fun Games

This guide will walk you through setting up and running Couple Fun Games on macOS from scratch.

## Prerequisites Check

Before starting, check if you already have Node.js installed:

1. Open **Terminal** (Applications > Utilities > Terminal)
2. Run these commands:

```bash
node --version
npm --version
```

If both commands show version numbers, you can skip to [Clone the Repository](#clone-the-repository).

## Step 1: Install Node.js and npm

### Method 1: Using the Official Installer (Recommended for Beginners)

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for macOS
   - Choose the macOS Installer (.pkg)

2. **Run the Installer:**
   - Double-click the downloaded `.pkg` file
   - Follow the installation wizard
   - Click "Continue" through the prompts
   - Accept the license agreement
   - Click "Install"
   - Enter your password when prompted
   - Click "Close" when installation completes

3. **Verify Installation:**
   - Open Terminal
   - Run:
   ```bash
   node --version
   npm --version
   ```

### Method 2: Using Homebrew (Recommended for Developers)

Homebrew is a popular package manager for macOS.

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Follow the post-installation instructions** displayed in Terminal to add Homebrew to your PATH

3. **Install Node.js:**
   ```bash
   brew install node
   ```

4. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

### Method 3: Using Node Version Manager (nvm) - Recommended for Advanced Users

NVM allows you to install and manage multiple Node.js versions:

```bash
# Download and install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart Terminal or reload shell configuration
source ~/.zshrc
# or if using bash
source ~/.bashrc

# Install latest LTS version of Node.js
nvm install --lts

# Verify installation
node --version
npm --version
```

## Step 2: Install Git

Git usually comes pre-installed on macOS, but let's verify:

```bash
git --version
```

If Git is not installed, you'll be prompted to install Xcode Command Line Tools. Click "Install" and follow the prompts.

### Alternative - Install via Homebrew:

```bash
brew install git
```

### Verify Git Installation:

```bash
git --version
```

## Step 3: Clone the Repository

1. **Open Terminal**

2. **Navigate to your desired directory:**
   ```bash
   cd ~/Documents
   ```

3. **Clone the repository:**
   ```bash
   git clone https://github.com/HasyimAP/couple-fun-games.git
   ```

4. **Navigate into the project:**
   ```bash
   cd couple-fun-games
   ```

## Step 4: Install Project Dependencies

```bash
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

If you prefer to run them in separate terminal windows or tabs:

**Terminal Window/Tab 1 - Backend Server:**
```bash
npm run server
```

**Terminal Window/Tab 2 - Frontend Dev Server:**
```bash
npm run client
```

**Tip:** Use `Cmd+T` to open new tabs in Terminal, or `Cmd+N` for new windows.

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
lsof -ti:3000

# Kill the process
lsof -ti:3000 | xargs kill -9
```

### Permission Denied Errors

If you encounter permission errors during `npm install`:

```bash
# Don't use sudo with npm, instead fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to PATH - for zsh (default on macOS Catalina and later)
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

# Or for bash (older macOS versions)
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Now try installing again
npm install
```

### Command Not Found After Installation

If `node` or `npm` commands are not found after installation:

1. Close and reopen Terminal
2. If using Homebrew and still not working:
   ```bash
   # Check if Homebrew is in PATH
   echo $PATH
   
   # Add Homebrew to PATH manually
   # For M1/M2 Macs:
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
   
   # For Intel Macs:
   echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zshrc
   
   # Reload configuration
   source ~/.zshrc
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

### macOS Firewall Blocking

If macOS Firewall blocks the app:
1. Go to System Preferences > Security & Privacy > Firewall
2. Click the lock to make changes (enter password)
3. Click "Firewall Options"
4. Add Node.js to the allowed apps

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

- Press `Ctrl+C` in the Terminal window
- Or use `Cmd+.` (Command + Period)

## Additional Tips

### Using iTerm2 (Alternative Terminal)

For a better terminal experience, consider installing iTerm2:
- Download from: https://iterm2.com/
- Offers better features like split panes, search, and themes

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

### Accessing from iPhone/iPad on Same Network

1. **Find your Mac's IP address:**
   ```bash
   ipconfig getifaddr en0
   ```

2. **Allow incoming connections** (if needed):
   - System Preferences > Security & Privacy > Firewall
   - Allow incoming connections for Node.js

3. **Access from mobile device:**
   ```
   http://YOUR_MAC_IP:5173
   ```

### Shell Configuration Files

- **macOS Catalina and later**: Uses `zsh` by default (`~/.zshrc`)
- **Older macOS versions**: Uses `bash` (`~/.bashrc` or `~/.bash_profile`)

To check which shell you're using:
```bash
echo $SHELL
```

## Keyboard Shortcuts

Useful Terminal shortcuts:
- `Cmd+T`: New tab
- `Cmd+N`: New window
- `Cmd+K`: Clear screen
- `Ctrl+C`: Stop running process
- `Cmd+Q`: Quit Terminal

## Next Steps

- Read the [main README](../README.md) for platform overview and quick start
- Read the [documentation index](README.md) for all documentation
- Explore individual game documentation
- Have fun playing! 🎮💕

## Getting Help

If you encounter any issues not covered here:
1. Check the [main README](../README.md) troubleshooting section
2. Look at the error messages carefully
3. Make sure you're using a new Terminal window after installation
4. Check if you're using the correct shell configuration file
5. Search for the error message online
6. Open an issue on GitHub with details about your problem

---

**Happy Gaming on macOS! 🍎🎮**
