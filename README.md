# React Portfolio Website

A modern, simplistic portfolio website built with React and deployed to GitHub Pages.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Fast and lightweight
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 📧 Contact information section

## Live Demo

Visit the live site at: `https://yourusername.github.io/your-repo-name`

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git

## Setup Instructions

### 1. Clone or Download This Project

If you're starting fresh in VS Code:
1. Open VS Code
2. Open a new folder where you want your project
3. Copy all the project files into this folder

### 2. Install Dependencies

Open the terminal in VS Code (Terminal → New Terminal) and run:

```bash
npm install
```

This will install all required dependencies including React and gh-pages.

### 3. Customize Your Portfolio

Edit the following files to personalize your portfolio:

**src/Portfolio.jsx:**
- Update your name, title, and description in the Hero section
- Modify the About section with your information
- Update the skills list with your technologies
- Replace the sample projects with your actual projects
- Update contact information (email, LinkedIn, GitHub)

**package.json:**
- Change the `homepage` field to your GitHub Pages URL:
  ```json
  "homepage": "https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO-NAME"
  ```

**public/index.html:**
- Update the `<title>` tag
- Modify the meta description

### 4. Test Locally

Run the development server to see your portfolio:

```bash
npm start
```

This will open your portfolio in the browser at `http://localhost:3000`

## Deploying to GitHub Pages

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it whatever you like (e.g., `my-portfolio`, `portfolio-site`)
3. Don't initialize with README (we already have files)

### 2. Initialize Git and Push Your Code

In your VS Code terminal, run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages

Still in the terminal, run:

```bash
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Deploy your built app to GitHub Pages

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME` within a few minutes!

## Making Updates

Whenever you make changes to your portfolio:

1. Save your changes in VS Code
2. Test locally with `npm start`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push
   ```
4. Deploy the updates:
   ```bash
   npm run deploy
   ```

## Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── index.js           # Entry point
│   └── Portfolio.jsx      # Main component
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Customization Tips

### Colors
The color scheme is defined in CSS variables in `Portfolio.jsx`. Look for:
```css
:root {
  --primary: #0a0a0a;
  --secondary: #f5f5f5;
  --accent: #2d5c8f;
  --text: #1a1a1a;
  --text-light: #666;
  --border: #e0e0e0;
}
```

### Fonts
The portfolio uses:
- **Crimson Pro** for headings (serif)
- **DM Sans** for body text (sans-serif)

You can change these in the Google Fonts import at the top of the CSS.

### Sections
You can easily add, remove, or reorder sections by modifying the JSX in `Portfolio.jsx`.

## Troubleshooting

**Issue: Site not showing up on GitHub Pages**
- Check that gh-pages branch exists in your repository
- Verify GitHub Pages is enabled in repository settings
- Wait a few minutes after deployment
- Check the `homepage` field in package.json matches your GitHub Pages URL

**Issue: npm install fails**
- Make sure you have Node.js installed
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again

**Issue: Changes not showing after deployment**
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub Pages to update
- Check if the build was successful in the terminal

## Resources

- [React Documentation](https://react.dev)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Create React App Documentation](https://create-react-app.dev)

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using React
