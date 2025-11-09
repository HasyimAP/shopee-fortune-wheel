# 🚀 Linux Server Deployment Guide - Couple Fun Games

This comprehensive guide will walk you through deploying Couple Fun Games on a production Linux server.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Server Setup](#server-setup)
- [Application Deployment](#application-deployment)
- [Process Management with PM2](#process-management-with-pm2)
- [Reverse Proxy with Nginx](#reverse-proxy-with-nginx)
- [SSL/HTTPS Setup](#sslhttps-setup)
- [Firewall Configuration](#firewall-configuration)
- [Maintenance and Monitoring](#maintenance-and-monitoring)

## Prerequisites

- A Linux server (Ubuntu 20.04/22.04 LTS recommended, but works with other distributions)
- Root or sudo access
- A domain name (optional, but recommended for production)
- Basic knowledge of Linux terminal commands

## Server Setup

### 1. Update System Packages

```bash
# Update package index
sudo apt update

# Upgrade installed packages
sudo apt upgrade -y
```

### 2. Install Node.js and npm

We'll use NodeSource repository to get the latest LTS version:

```bash
# Install curl if not already installed
sudo apt install -y curl

# Add NodeSource repository (Node.js 20.x LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js and npm
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

### 3. Install Git

```bash
sudo apt install -y git

# Verify installation
git --version
```

## Application Deployment

### 1. Create Application User (Recommended)

For security, create a dedicated user for the application:

```bash
# Create a new user
sudo adduser --disabled-password --gecos "" gamesapp

# Switch to the new user
sudo su - gamesapp
```

### 2. Clone the Repository

```bash
# Navigate to home directory
cd ~

# Clone the repository
git clone https://github.com/HasyimAP/couple-fun-games.git

# Navigate to the project directory
cd couple-fun-games
```

### 3. Install Dependencies

```bash
npm install --production
```

### 4. Build the Frontend

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 5. Test the Application

Before setting up process management, test that the application runs:

```bash
# Start the backend server
npm run server
```

Open another terminal and test:
```bash
curl http://localhost:3000/api/wheel-config/default
```

If you get a JSON response, the backend is working! Press `Ctrl+C` to stop.

## Process Management with PM2

PM2 is a production process manager that keeps your application running, automatically restarts it on crashes, and provides monitoring.

### 1. Install PM2 Globally

```bash
# Exit from gamesapp user if needed
exit

# Install PM2 globally
sudo npm install -g pm2
```

### 2. Create PM2 Ecosystem File

Create a configuration file for PM2:

```bash
# Switch back to gamesapp user
sudo su - gamesapp
cd ~/couple-fun-games

# Create ecosystem config
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'games-backend',
      script: 'backend/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: 'logs/backend-error.log',
      out_file: 'logs/backend-out.log',
      log_file: 'logs/backend-combined.log',
      time: true
    }
  ]
};
EOF

# Create logs directory
mkdir -p logs
```

### 3. Start Application with PM2

```bash
# Start the application
pm2 start ecosystem.config.js

# View status
pm2 status

# View logs
pm2 logs games-backend

# Monitor the application
pm2 monit
```

### 4. Configure PM2 to Start on Boot

```bash
# Exit from gamesapp user
exit

# Generate startup script
sudo pm2 startup systemd -u gamesapp --hp /home/gamesapp

# Switch back to gamesapp user
sudo su - gamesapp
cd ~/couple-fun-games

# Save PM2 process list
pm2 save

# Exit back to your main user
exit
```

Now PM2 will automatically start your application when the server reboots.

## Reverse Proxy with Nginx

Nginx will serve the static frontend files and proxy API requests to the backend.

### 1. Install Nginx

```bash
sudo apt install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2. Configure Nginx

Create a new Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/couple-fun-games
```

Add the following configuration (replace `your-domain.com` with your actual domain or use server's IP):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain or server IP

    # Frontend - serve static files from dist directory
    root /home/gamesapp/couple-fun-games/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/x-javascript application/xml+rss;

    # Frontend routing - serve index.html for all non-API routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API - proxy to Node.js server
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 3. Enable the Site

```bash
# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/couple-fun-games /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test is successful, reload Nginx
sudo systemctl reload nginx
```

### 4. Verify the Deployment

Open your browser and navigate to:
- `http://your-domain.com` or `http://your-server-ip`

You should see the Couple Fun Games application running!

## SSL/HTTPS Setup

For production, always use HTTPS. We'll use Let's Encrypt (free SSL certificates).

### 1. Install Certbot

```bash
# Install Certbot and Nginx plugin
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Obtain SSL Certificate

```bash
# Make sure your domain points to your server's IP address
# Then run Certbot
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow the prompts:
- Enter your email address
- Agree to the terms of service
- Choose whether to redirect HTTP to HTTPS (recommended: yes)

Certbot will automatically:
- Obtain the SSL certificate
- Update your Nginx configuration
- Set up automatic renewal

### 3. Test SSL Configuration

Visit your site using HTTPS:
```
https://your-domain.com
```

### 4. Verify Auto-Renewal

```bash
# Test renewal process (dry run)
sudo certbot renew --dry-run
```

Certbot automatically sets up a cron job to renew certificates before they expire.

## Firewall Configuration

### Using UFW (Uncomplicated Firewall)

```bash
# Enable UFW
sudo ufw enable

# Allow SSH (important - don't lock yourself out!)
sudo ufw allow ssh
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'
# Or manually:
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Check status
sudo ufw status verbose
```

### Using firewalld (for CentOS/RHEL/Fedora)

```bash
# Start and enable firewalld
sudo systemctl start firewalld
sudo systemctl enable firewalld

# Allow HTTP and HTTPS
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https

# Reload firewall
sudo firewall-cmd --reload

# Check status
sudo firewall-cmd --list-all
```

## Maintenance and Monitoring

### PM2 Commands

```bash
# View all processes
pm2 status

# View logs
pm2 logs games-backend

# View real-time logs
pm2 logs games-backend --lines 100

# Restart application
pm2 restart games-backend

# Stop application
pm2 stop games-backend

# Delete from PM2
pm2 delete games-backend
```

### Updating the Application

```bash
# Switch to gamesapp user
sudo su - gamesapp
cd ~/couple-fun-games

# Pull latest changes
git pull origin main

# Install new dependencies (if any)
npm install --production

# Rebuild frontend
npm run build

# Restart backend with PM2
pm2 restart games-backend

# Exit back to main user
exit
```

### Nginx Commands

```bash
# Test configuration
sudo nginx -t

# Reload Nginx (for config changes)
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### System Monitoring

```bash
# Check disk usage
df -h

# Check memory usage
free -h

# Check CPU usage
top
# or
htop  # Install with: sudo apt install htop

# Check PM2 metrics
pm2 monit
```

### Log Management

Logs can grow large over time. Set up log rotation:

```bash
# PM2 handles log rotation automatically, but you can configure it
pm2 install pm2-logrotate

# Configure log rotation (keep logs for 30 days, rotate when > 10MB)
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
```

## Alternative: Using Systemd (Instead of PM2)

If you prefer not to use PM2, you can use systemd directly:

### Create Systemd Service File

```bash
sudo nano /etc/systemd/system/games-backend.service
```

Add the following content:

```ini
[Unit]
Description=Couple Fun Games Backend Server
After=network.target

[Service]
Type=simple
User=gamesapp
WorkingDirectory=/home/gamesapp/couple-fun-games
ExecStart=/usr/bin/node backend/server.js
Restart=always
RestartSec=10
StandardOutput=append:/home/gamesapp/couple-fun-games/logs/backend-out.log
StandardError=append:/home/gamesapp/couple-fun-games/logs/backend-error.log
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

### Enable and Start the Service

```bash
# Create logs directory
sudo -u gamesapp mkdir -p /home/gamesapp/couple-fun-games/logs

# Reload systemd
sudo systemctl daemon-reload

# Enable service to start on boot
sudo systemctl enable games-backend

# Start the service
sudo systemctl start games-backend

# Check status
sudo systemctl status games-backend

# View logs
sudo journalctl -u games-backend -f
```

## Troubleshooting

### Application Won't Start

```bash
# Check PM2 logs
pm2 logs games-backend --err

# Check if port 3000 is already in use
sudo lsof -i:3000
sudo netstat -tulpn | grep 3000
```

### Nginx Errors

```bash
# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Test Nginx configuration
sudo nginx -t

# Check Nginx status
sudo systemctl status nginx
```

### Permission Issues

```bash
# Fix ownership of application files
sudo chown -R gamesapp:gamesapp /home/gamesapp/couple-fun-games

# Make sure Nginx can read the dist directory
sudo chmod -R 755 /home/gamesapp/couple-fun-games/dist
```

### Port Conflicts

```bash
# Find what's using a port
sudo lsof -i:3000
sudo lsof -i:80

# Kill process by PID
sudo kill -9 <PID>
```

## Security Best Practices

1. **Keep system updated**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Use strong passwords** and SSH keys

3. **Disable root SSH login**:
   ```bash
   sudo nano /etc/ssh/sshd_config
   # Set: PermitRootLogin no
   sudo systemctl restart sshd
   ```

4. **Enable automatic security updates**:
   ```bash
   sudo apt install unattended-upgrades
   sudo dpkg-reconfigure --priority=low unattended-upgrades
   ```

5. **Set up fail2ban** to prevent brute force attacks:
   ```bash
   sudo apt install fail2ban
   sudo systemctl enable fail2ban
   sudo systemctl start fail2ban
   ```

6. **Regular backups**:
   ```bash
   # Example backup script
   tar -czf ~/backup-$(date +%Y%m%d).tar.gz ~/couple-fun-games
   ```

## Performance Optimization

### 1. Enable HTTP/2 in Nginx

In your Nginx config, change:
```nginx
listen 443 ssl;
```
to:
```nginx
listen 443 ssl http2;
```

### 2. Add Caching Headers

Already included in the configuration above. Static assets are cached for 1 year.

### 3. Monitor Performance

```bash
# Install monitoring tools
sudo apt install -y netdata

# Access Netdata dashboard
# Visit http://your-server-ip:19999
```

## Scaling Considerations

### Running Multiple Backend Instances

If you need to handle more traffic:

```javascript
// Update ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'games-backend',
      script: 'backend/server.js',
      instances: 4,  // Run 4 instances (or 'max' for CPU cores)
      exec_mode: 'cluster',  // Enable cluster mode
      autorestart: true,
      // ... rest of config
    }
  ]
};
```

Then restart:
```bash
pm2 restart games-backend
```

## Additional Resources

- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## Getting Help

If you encounter issues:
1. Check the logs first (PM2 logs, Nginx logs)
2. Review the troubleshooting section above
3. Search for error messages online
4. Open an issue on GitHub with details

---

**Happy Deploying! 🚀🎡**
