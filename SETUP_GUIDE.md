# Complete Setup & Deployment Guide

## 📁 What You Have

Your portfolio project contains:
- ✅ Complete React application
- ✅ Modern, responsive design
- ✅ GitHub Pages deployment configuration
- ✅ All necessary files and folders

## 🚀 Getting Started in VS Code

### Step 1: Open Project in VS Code

1. Download the `portfolio-project` folder to your computer
2. Open Visual Studio Code
3. Click **File → Open Folder**
4. Select the `portfolio-project` folder

### Step 2: Install Node.js (if you haven't)

1. Visit https://nodejs.org
2. Download the LTS (Long Term Support) version
3. Install it
4. Restart VS Code

### Step 3: Install Dependencies

1. Open terminal in VS Code: **Terminal → New Terminal** (or press `Ctrl + \``)
2. Make sure you're in the project folder
3. Run:
   ```bash
   npm install
   ```
4. Wait for installation to complete (2-3 minutes)

### Step 4: Test Locally

Run this command in the terminal:
```bash
npm start
```

Your portfolio will open in your browser at `http://localhost:3000`

To stop the server, press `Ctrl + C` in the terminal.

## ✏️ Customizing Your Portfolio

### File: `src/Portfolio.jsx`

**Update your personal information:**

1. **Hero Section** (around line 107):
   ```jsx
   <div className="hero-subtitle">Developer & Designer</div>
   <h1 className="hero-title">Creating Digital Experiences</h1>
   <p className="hero-description">
     Your custom description here...
   </p>
   ```

2. **About Section** (around line 168):
   ```jsx
   <p>
     I'm a full-stack developer with a passion for...
   </p>
   ```

3. **Skills** (around line 183):
   ```jsx
   <span className="skill-tag">React</span>
   <span className="skill-tag">JavaScript</span>
   // Add or remove skills as needed
   ```

4. **Projects** (around line 33):
   ```jsx
   const projects = [
     {
       title: "Your Project Name",
       description: "Description of your project",
       tech: ["React", "Node.js", "etc"],
       link: "https://your-project-link.com"
     },
     // Add more projects...
   ];
   ```

5. **Contact Info** (around line 243):
   ```jsx
   <a href="mailto:YOUR-EMAIL@example.com">your.email@example.com</a>
   <a href="https://linkedin.com/in/YOUR-PROFILE">LinkedIn</a>
   <a href="https://github.com/YOUR-USERNAME">GitHub</a>
   ```

### File: `package.json`

Update line 5 with your GitHub info:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"
```

### File: `public/index.html`

Update the title and description:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your custom description" />
```

## 🌐 Deploying to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click the **+** icon → **New repository**
3. Name it (e.g., `my-portfolio`)
4. **Don't** check "Initialize with README"
5. Click **Create repository**

### Step 2: Connect Your Project to GitHub

In VS Code terminal, run these commands one by one:

```bash
# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository (REPLACE WITH YOUR INFO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

Run this command:
```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Deploy your site automatically

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

**Your site will be live at:** `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

(It may take 2-5 minutes to go live)

## 🔄 Making Updates

When you make changes to your portfolio:

1. **Save** your files in VS Code
2. **Test locally** with `npm start`
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Updated portfolio content"
   git push
   ```
4. **Deploy updates:**
   ```bash
   npm run deploy
   ```

Your site will update in 2-5 minutes!

## 🎨 Design Customization

### Changing Colors

In `src/Portfolio.jsx`, find the CSS variables (around line 67):

```css
:root {
  --primary: #0a0a0a;      /* Main dark color */
  --secondary: #f5f5f5;    /* Background color */
  --accent: #2d5c8f;       /* Accent/link color */
  --text: #1a1a1a;         /* Text color */
  --text-light: #666;      /* Secondary text */
  --border: #e0e0e0;       /* Border color */
}
```

Change these hex codes to customize your color scheme!

### Changing Fonts

The project uses Google Fonts. To change fonts:

1. Visit https://fonts.google.com
2. Select fonts you like
3. Replace the import URL in Portfolio.jsx (around line 60)
4. Update the font-family CSS properties

## 🐛 Troubleshooting

### "npm: command not found"
- Install Node.js from https://nodejs.org
- Restart VS Code after installation

### "Port 3000 is already in use"
- Close other React apps running
- Or change the port in package.json

### Site not updating on GitHub Pages
- Clear browser cache (`Ctrl + Shift + R` or `Cmd + Shift + R`)
- Wait 5-10 minutes
- Check if deployment succeeded in terminal

### Build errors
- Delete `node_modules` folder
- Run `npm install` again
- Try `npm start` to see specific errors

### Git errors
- Make sure you replaced YOUR-USERNAME and YOUR-REPO-NAME with actual values
- Check if you're logged into GitHub in your terminal

## 📚 Useful Commands

```bash
npm start          # Run development server
npm run build      # Create production build
npm run deploy     # Deploy to GitHub Pages
git status         # Check which files changed
git log            # See commit history
```

## 🔗 Resources

- [React Docs](https://react.dev)
- [GitHub Pages Guide](https://docs.github.com/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [VS Code Terminal Guide](https://code.visualstudio.com/docs/terminal/basics)

## 💡 Tips

1. **Test locally first** before deploying
2. **Commit often** with clear messages
3. **Keep backups** of your portfolio
4. **Use meaningful commit messages** like "Added new project" or "Updated about section"
5. **Check mobile responsiveness** by resizing your browser

## ✨ Next Steps

After setting up:
1. Customize all placeholder text
2. Add your real projects
3. Add a profile photo/avatar
4. Set up a custom domain (optional)
5. Add Google Analytics (optional)

---

**Need Help?** 
- Check the QUICK_START.md for faster reference
- Read the detailed README.md
- Search for error messages online
- GitHub and Stack Overflow are great resources!

Good luck with your portfolio! 🚀
