# Quick Start Guide - VS Code Setup

Follow these steps to set up your portfolio in Visual Studio Code:

## Step 1: Open the Project in VS Code

1. Open Visual Studio Code
2. Click "File" → "Open Folder"
3. Navigate to the `portfolio-project` folder and select it

## Step 2: Open Terminal in VS Code

1. In VS Code, click "Terminal" → "New Terminal" (or press Ctrl+` or Cmd+`)
2. The terminal will open at the bottom of your VS Code window

## Step 3: Install Dependencies

In the terminal, type this command and press Enter:

```bash
npm install
```

Wait for the installation to complete (you'll see a progress indicator).

## Step 4: Customize Your Portfolio

Open these files in VS Code and customize them:

### src/Portfolio.jsx
- Line 107-109: Change "Your Name" and description
- Line 168-182: Update the About section
- Line 183-192: Update your skills
- Line 243-258: Update contact information (email, LinkedIn, GitHub)

### package.json
- Line 5: Change to `"homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"`

### public/index.html
- Line 10: Update the title
- Line 8-10: Update the description

## Step 5: Test Your Portfolio Locally

In the terminal, run:

```bash
npm start
```

This will open your portfolio in your browser at `http://localhost:3000`

Press Ctrl+C in the terminal to stop the development server.

## Step 6: Deploy to GitHub Pages

### First Time Setup:

1. **Create a GitHub repository:**
   - Go to github.com and create a new repository
   - Don't initialize with README

2. **Initialize Git in your project:**
   In the VS Code terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: gh-pages branch
   - Save

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## Making Updates Later

After making changes:

```bash
git add .
git commit -m "Your update message"
git push
npm run deploy
```

## Common Issues

**Can't find npm?**
- Install Node.js from nodejs.org (includes npm)
- Restart VS Code after installation

**Port already in use?**
- Close other React apps or change the port
- Or just close the terminal tab and try again

**Site not updating?**
- Clear browser cache (Ctrl+Shift+R)
- Wait a few minutes for GitHub Pages to update

---

Need help? Check the full README.md for more detailed instructions!
