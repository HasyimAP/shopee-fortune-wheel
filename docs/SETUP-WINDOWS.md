# 🪟 Windows Setup Guide - Couple Fun Games

This guide will walk you through setting up and running Couple Fun Games on Windows from scratch.

## Prerequisites Check

Before starting, check if you already have Node.js installed:

1. Open **Command Prompt** or **PowerShell**
2. Run these commands:

```cmd
node --version
npm --version
```

If both commands show version numbers, you can skip to [Clone the Repository](#clone-the-repository).

## Step 1: Install Node.js and npm

### Method 1: Using the Official Installer (Recommended for Beginners)

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for Windows
   - Choose the Windows Installer (.msi) for your system (64-bit or 32-bit)

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - Accept the license agreement
   - Keep the default installation path
   - **Important:** Make sure "Add to PATH" is checked
   - Click "Install"
   - Click "Finish" when done

3. **Verify Installation:**
   - Open a **new** Command Prompt or PowerShell window
   - Run:
   ```cmd
   node --version
   npm --version
   ```

### Method 2: Using Chocolatey Package Manager

If you have Chocolatey installed:

```powershell
# Run PowerShell as Administrator
choco install nodejs-lts

# Verify installation
node --version
npm --version
```

### Method 3: Using Windows Package Manager (winget)

If you have Windows 10/11 with winget:

```powershell
# Run in PowerShell or Command Prompt
winget install OpenJS.NodeJS.LTS

# Verify installation (in a new window)
node --version
npm --version
```

## Step 2: Install Git

### Using the Official Installer:

1. **Download Git:**
   - Visit: https://git-scm.com/download/win
   - Download the latest version for Windows
   - Run the installer

2. **Installation Options:**
   - Use default settings for most options
   - For "Adjusting your PATH environment": Select "Git from the command line and also from 3rd-party software"
   - For line ending conversions: "Checkout Windows-style, commit Unix-style line endings"
   - For terminal emulator: "Use MinTTY"

3. **Verify Installation:**
   - Open a new Command Prompt or PowerShell
   - Run:
   ```cmd
   git --version
   ```

### Alternative - Using Package Managers:

```powershell
# Using Chocolatey
choco install git

# Using winget
winget install Git.Git
```

## Step 3: Clone the Repository

1. **Open Command Prompt or PowerShell**

2. **Navigate to your desired directory:**
   ```cmd
   cd %USERPROFILE%\Documents
   ```

3. **Clone the repository:**
   ```cmd
   git clone https://github.com/HasyimAP/couple-fun-games.git
   ```

4. **Navigate into the project:**
   ```cmd
   cd couple-fun-games
   ```

## Step 4: Install Project Dependencies

```cmd
npm install
```

This will download and install all the dependencies. It may take a few minutes.

## Step 5: Run the Application

### Option A: Run Frontend and Backend Together (Recommended)

```cmd
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

**Command Prompt/PowerShell Window 1 - Backend Server:**
```cmd
npm run server
```

**Command Prompt/PowerShell Window 2 - Frontend Dev Server:**
```cmd
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

If you see "Port 3000 already in use":

**Using Command Prompt:**
```cmd
# Find the process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with the actual number)
taskkill /PID <PID> /F
```

**Using PowerShell:**
```powershell
# Find and kill the process in one command
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

### Execution Policy Error (PowerShell)

If you get "cannot be loaded because running scripts is disabled":

```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 'node' is not recognized

If you get "'node' is not recognized as an internal or external command":

1. Close and reopen Command Prompt/PowerShell
2. If still not working, manually add Node.js to PATH:
   - Search for "Environment Variables" in Windows Start Menu
   - Click "Edit the system environment variables"
   - Click "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Click "New" and add: `C:\Program Files\nodejs\`
   - Click "OK" on all windows
   - Reopen Command Prompt/PowerShell

### Dependencies Installation Fails

```cmd
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rmdir /s /q node_modules
del package-lock.json

# Reinstall dependencies
npm install
```

### Browser Doesn't Open Automatically

Simply open your browser manually and navigate to:
```
http://localhost:5173
```

### Windows Firewall Blocking

If Windows Firewall blocks the app:
1. Click "Allow access" when the firewall popup appears
2. Or manually allow it in Windows Defender Firewall settings

## Building for Production

To create an optimized production build:

```cmd
npm run build
```

This creates a `dist\` folder with optimized static files.

To preview the production build:

```cmd
npm run preview
```

## Stopping the Application

- Press `Ctrl+C` in the Command Prompt or PowerShell window
- Type `Y` when asked to terminate the batch job

## Additional Tips

### Using Git Bash (Alternative Terminal)

If you installed Git, you have Git Bash which provides a Unix-like terminal:
- Find "Git Bash" in your Start Menu
- All Linux commands from the Linux guide will work here

### Running in the Background (Advanced)

Using PowerShell:

```powershell
# Start backend in background
Start-Process npm -ArgumentList "run server" -NoNewWindow

# Start frontend in background  
Start-Process npm -ArgumentList "run client" -NoNewWindow
```

### Windows Terminal (Recommended)

For a better terminal experience, install Windows Terminal from Microsoft Store:
- Supports multiple tabs
- Better colors and fonts
- Can run PowerShell, CMD, and Git Bash in tabs

## Next Steps

- Read the [main README](../README.md) for game rules and features
- Explore customization options
- Have fun playing! 🎡💕

## Getting Help

If you encounter any issues not covered here:
1. Check the [main README](../README.md) troubleshooting section
2. Look at the error messages carefully
3. Search for the error message online
4. Make sure you're using a new terminal window after installation
5. Open an issue on GitHub with details about your problem

---

**Happy Gaming on Windows! 🪟🎡**
