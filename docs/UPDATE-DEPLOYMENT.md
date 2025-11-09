# 🔄 Updating Deployment - Couple Fun Games

This guide provides detailed instructions for updating your deployed Couple Fun Games application on a Linux server after pulling new changes from the repository.

## Table of Contents
- [Quick Update Guide](#quick-update-guide)
- [Detailed Update Procedure](#detailed-update-procedure)
- [Handling Merge Conflicts](#handling-merge-conflicts)
- [Troubleshooting](#troubleshooting)
- [Rollback Procedure](#rollback-procedure)

## Quick Update Guide

For experienced users who just need a quick reference:

```bash
# 1. Switch to application user
sudo su - gamesapp
cd ~/couple-fun-games

# 2. Check current status
git status
git fetch origin

# 3. Backup current version (optional but recommended)
git branch backup-$(date +%Y%m%d-%H%M%S)

# 4. Pull latest changes
git pull origin main

# 5. Install any new dependencies
npm install --production

# 6. Rebuild the frontend
npm run build

# 7. Restart the backend service
pm2 restart games-backend

# 8. Verify the update
pm2 status
pm2 logs games-backend --lines 50

# 9. Exit back to your main user
exit
```

## Detailed Update Procedure

### Step 1: Prepare for Update

Before updating, it's good practice to check the current state and create a backup point.

```bash
# Switch to the application user
sudo su - gamesapp

# Navigate to application directory
cd ~/couple-fun-games

# Check current Git status
git status
```

**What to look for:**
- If you see "Your branch is up to date", no updates are available
- If you see "modified" files, you may have local changes that could conflict
- If you see "untracked files", these won't affect the update

### Step 2: Fetch and Review Updates

```bash
# Fetch the latest changes from the repository
git fetch origin

# See what changes are available
git log HEAD..origin/main --oneline

# See which files will be changed
git diff HEAD..origin/main --name-only
```

This helps you understand what's changing before you apply the update.

### Step 3: Create a Backup Point (Optional but Recommended)

```bash
# Create a backup branch with timestamp
git branch backup-$(date +%Y%m%d-%H%M%S)

# Or tag the current version
git tag -a backup-$(date +%Y%m%d-%H%M%S) -m "Backup before update"
```

This allows you to quickly rollback if something goes wrong.

### Step 4: Pull the Updates

```bash
# Pull the latest changes from main branch
git pull origin main
```

**Expected outcomes:**
- ✅ **"Already up to date"**: No updates available
- ✅ **"Fast-forward"**: Updates applied successfully without conflicts
- ⚠️ **"CONFLICT"**: Merge conflicts detected (see [Handling Merge Conflicts](#handling-merge-conflicts))

### Step 5: Install Dependencies

After pulling updates, install any new or updated dependencies:

```bash
# Install production dependencies only
npm install --production

# Or, if you also want dev dependencies (for development server)
npm install
```

**Note:** The `--production` flag installs only the dependencies needed to run the app, not development tools.

### Step 6: Rebuild the Frontend

The frontend needs to be rebuilt to reflect the changes:

```bash
# Build the optimized production version
npm run build
```

This creates a new `dist/` folder with the updated frontend files.

**What this does:**
- Compiles and optimizes all React components
- Bundles JavaScript and CSS files
- Generates static files that Nginx will serve

### Step 7: Restart the Backend

Restart the backend service to load the new code:

```bash
# If using PM2 (recommended)
pm2 restart games-backend

# View the status
pm2 status

# Check logs for any errors
pm2 logs games-backend --lines 50
```

**Alternative if using systemd:**
```bash
# Exit to main user first
exit

# Restart the systemd service
sudo systemctl restart games-backend

# Check status
sudo systemctl status games-backend

# View logs
sudo journalctl -u games-backend -n 50 -f
```

### Step 8: Verify the Update

```bash
# Check PM2 status
pm2 status

# Monitor logs for errors
pm2 logs games-backend --lines 100

# Check if the backend is responding
curl http://localhost:3000/api/wheel-config/default
```

**In your web browser:**
1. Open your application URL
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R) to clear cache
3. Test the updated features
4. Check browser console for any errors (F12 → Console tab)

### Step 9: Clean Up (Optional)

```bash
# Remove old backup branches (after confirming update works)
git branch -d backup-20240101-120000

# Clean up old node_modules if needed
npm prune --production
```

## Handling Merge Conflicts

If you see a conflict message during `git pull`:

```
CONFLICT (content): Merge conflict in src/components/HostSetup.jsx
Automatic merge failed; fix conflicts and then commit the result.
```

### Option 1: Discard Local Changes (Recommended if you haven't made intentional changes)

```bash
# Abort the merge
git merge --abort

# Discard all local changes and force pull
git fetch origin
git reset --hard origin/main

# Continue with the update steps (install, build, restart)
npm install --production
npm run build
pm2 restart games-backend
```

### Option 2: Manually Resolve Conflicts

If you have intentional local modifications you want to keep:

```bash
# List conflicted files
git status

# Open the conflicted file(s) in an editor
nano src/components/HostSetup.jsx  # or use vim, vi, etc.
```

**Inside the file, you'll see:**
```javascript
<<<<<<< HEAD
// Your local changes
const myVariable = 'local value';
=======
// Changes from the repository
const myVariable = 'new value';
>>>>>>> origin/main
```

**To resolve:**
1. Edit the file to keep the version you want
2. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Save the file

**After resolving all conflicts:**
```bash
# Mark conflicts as resolved
git add .

# Complete the merge
git commit -m "Merged updates from origin/main"

# Continue with the update steps
npm install --production
npm run build
pm2 restart games-backend
```

### Option 3: Stash Local Changes Temporarily

```bash
# Save your local changes temporarily
git stash save "My local changes before update"

# Pull the updates
git pull origin main

# Try to apply your changes back
git stash pop

# If there are conflicts, resolve them as in Option 2
# Then continue with install, build, restart
```

## Troubleshooting

### Update Applied But Site Still Shows Old Version

**Cause:** Browser cache or CDN cache

**Solution:**
```bash
# 1. Verify the build was successful
ls -la dist/

# 2. Check the build timestamp
stat dist/index.html

# 3. Clear browser cache
# - Chrome/Edge: Ctrl+Shift+Delete → Clear browsing data
# - Firefox: Ctrl+Shift+Delete → Clear recent history
# - Or just use Hard Refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

# 4. If using Nginx caching, clear it
sudo systemctl reload nginx
```

### Backend Won't Restart

**Check PM2 logs:**
```bash
pm2 logs games-backend --lines 100
```

**Common issues:**
1. **Port already in use:**
   ```bash
   # Find process using port 3000
   sudo lsof -i :3000
   
   # Kill the process
   sudo kill -9 [PID]
   
   # Restart PM2
   pm2 restart games-backend
   ```

2. **Missing dependencies:**
   ```bash
   # Reinstall all dependencies
   npm install --production
   ```

3. **Syntax errors in code:**
   - Check the error message in logs
   - Verify the update was pulled correctly
   - Consider rolling back (see below)

### Dependencies Installation Fails

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install --production
```

### Build Process Fails

```bash
# Check for specific error messages
npm run build

# Common fixes:
# 1. Ensure you have enough disk space
df -h

# 2. Ensure you have enough memory
free -h

# 3. Try with more verbose output
npm run build --verbose
```

## Rollback Procedure

If the update causes problems, you can rollback to the previous version:

### Using Backup Branch

```bash
# List backup branches
git branch | grep backup

# Checkout the backup branch
git checkout backup-20240101-120000

# Reinstall dependencies and rebuild
npm install --production
npm run build
pm2 restart games-backend

# Verify it works, then make this the new main if needed
git checkout -b temp-main
git checkout main
git reset --hard backup-20240101-120000
```

### Using Git Reset

```bash
# View recent commits
git log --oneline -10

# Reset to a specific commit (replace abc123 with actual commit hash)
git reset --hard abc123

# Reinstall and rebuild
npm install --production
npm run build
pm2 restart games-backend
```

### Using Git Revert

For a safer rollback that preserves history:

```bash
# Revert the last commit
git revert HEAD

# Or revert a specific commit
git revert abc123

# Reinstall and rebuild
npm install --production
npm run build
pm2 restart games-backend
```

## Update Checklist

Use this checklist to ensure you don't miss any steps:

- [ ] Logged in as application user (`sudo su - gamesapp`)
- [ ] Navigated to application directory (`cd ~/couple-fun-games`)
- [ ] Checked current status (`git status`)
- [ ] Created backup point (`git branch backup-$(date +%Y%m%d-%H%M%S)`)
- [ ] Pulled updates (`git pull origin main`)
- [ ] Resolved any conflicts if needed
- [ ] Installed dependencies (`npm install --production`)
- [ ] Rebuilt frontend (`npm run build`)
- [ ] Restarted backend (`pm2 restart games-backend`)
- [ ] Checked PM2 status (`pm2 status`)
- [ ] Viewed logs for errors (`pm2 logs games-backend --lines 50`)
- [ ] Tested application in browser with hard refresh (Ctrl+F5)
- [ ] Verified all features work correctly
- [ ] Exited back to main user (`exit`)

## Best Practices

1. **Always create a backup point** before updating
2. **Test in a staging environment first** if possible
3. **Update during low-traffic periods** to minimize user impact
4. **Monitor logs** for at least 10-15 minutes after updating
5. **Keep backups** for at least 2-3 versions back
6. **Document any custom changes** you make to avoid conflicts
7. **Subscribe to repository notifications** to know when updates are available
8. **Read the changelog** or commit messages before updating

## Automated Update Script (Advanced)

For convenience, you can create an update script:

```bash
# Create the script
nano ~/update-games.sh
```

Add the following content:

```bash
#!/bin/bash
set -e  # Exit on error

echo "🔄 Starting Couple Fun Games Update..."

# Variables
APP_DIR="/home/gamesapp/couple-fun-games"
BACKUP_BRANCH="backup-$(date +%Y%m%d-%H%M%S)"

# Change to app directory
cd "$APP_DIR"

echo "📋 Current status:"
git status

echo "💾 Creating backup branch: $BACKUP_BRANCH"
git branch "$BACKUP_BRANCH"

echo "📥 Pulling latest changes..."
git pull origin main

echo "📦 Installing dependencies..."
npm install --production

echo "🔨 Building frontend..."
npm run build

echo "🔄 Restarting backend..."
pm2 restart games-backend

echo "✅ Update complete!"
echo "📊 Current PM2 status:"
pm2 status

echo "📝 Viewing recent logs..."
pm2 logs games-backend --lines 20 --nostream

echo ""
echo "🎉 Update finished! Please test the application."
echo "💡 Backup branch created: $BACKUP_BRANCH"
```

Make it executable:

```bash
chmod +x ~/update-games.sh
```

Use it:

```bash
sudo su - gamesapp
~/update-games.sh
```

## Additional Resources

- [Main Deployment Guide](DEPLOYMENT-LINUX.md)
- [Linux Setup Guide](SETUP-LINUX.md)
- [Git Documentation](https://git-scm.com/doc)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [NPM Documentation](https://docs.npmjs.com/)

---

**Need help?** Check the [main README](../README.md) or review the logs for specific error messages.
