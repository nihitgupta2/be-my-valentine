# 💕 Be My Valentine Website

A cute, interactive, and playful website to ask someone special to be your Valentine! Features multiple steps with fun interactions where saying "no" becomes increasingly difficult (and eventually impossible).

## ✨ Features

- 🎯 **Multi-step experience**: 6 engaging steps from introduction to celebration
- 🏃 **Escaping "No" button**: The "No" button runs away from the cursor and gets faster with each step
- 💝 **Beautiful animations**: Floating hearts, button bounces, and confetti celebration
- 🎨 **Cute design**: Pink and romantic color scheme perfect for Valentine's Day
- 📱 **Mobile responsive**: Works beautifully on all devices
- 🚀 **Zero dependencies**: Pure vanilla HTML, CSS, and JavaScript

## 🎮 How It Works

1. **Landing Page**: Sweet introduction with a teddy bear GIF
2. **The Question**: "Will you be my Valentine?" with Yes and No buttons
3. **First Persuasion**: If they try to click No, button escapes and shows puppy eyes
4. **Increased Persuasion**: Yes button gets bigger, No button gets smaller
5. **Almost There**: Giant Yes button, microscopic No button
6. **Celebration**: Confetti animation and celebration when they say Yes!

## 🚀 Quick Start

### Option 1: Test Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No installation or build process needed.

### Option 2: Deploy to GitHub Pages

1. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `valentine-2025` or `be-my-valentine`
   - Make it public (so the website can be shared)

2. **Upload your files**
   ```bash
   cd D:\Repo-Fun
   git init
   git add .
   git commit -m "Add valentine website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes for deployment

4. **Get your website URL**
   - Your website will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Share this link with your special someone!

## 🎨 Customization

### Change the GIFs

Edit the `src` attributes in `index.html` to use your preferred GIFs:

```html
<!-- Example: Change the landing page GIF -->
<img src="YOUR_GIF_URL_HERE" alt="Description" class="gif">
```

Great sources for GIFs:
- [Giphy](https://giphy.com)
- [Tenor](https://tenor.com)

### Modify Messages

Update the text in `index.html` to personalize the messages:

```html
<h1>Your custom message here!</h1>
<p>Your custom description here!</p>
```

### Change Colors

Edit `styles.css` to change the color scheme:

```css
/* Look for these color codes and replace them */
#FF69B4  /* Hot Pink */
#FFB6C1  /* Light Pink */
#FF1493  /* Deep Pink */
#C71585  /* Medium Violet Red */
```

### Adjust Button Behavior

Modify the escape configuration in `script.js`:

```javascript
const escapeConfig = {
    2: { distance: 100, speed: 0.1 },  // Step 2 settings
    3: { distance: 80, speed: 0.08 },   // Step 3 settings
    // ... adjust these values
};
```

- `distance`: How close the cursor can get before button escapes (in pixels)
- `speed`: How fast the button moves (lower = faster)

## 📁 File Structure

```
valentine-website/
├── index.html          # Main HTML structure
├── styles.css          # Cute, playful styling
├── script.js           # Interactive behavior
└── README.md          # This file!
```

## 🎯 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 💡 Tips

- Test the website before sharing to make sure all GIFs load properly
- Consider personalizing the messages with inside jokes or references
- You can add a custom message in Step 4 (like "I'll buy you [their favorite thing]...")
- The website works offline once loaded, perfect for local romantic gestures!

## 🐛 Troubleshooting

**GIFs not loading?**
- Make sure you're using direct GIF URLs (ending in `.gif`)
- Try using Giphy or Tenor CDN links
- Check your internet connection

**Button not escaping on mobile?**
- The escape behavior works with touch on mobile devices
- Make sure JavaScript is enabled in your browser

**Website not showing on GitHub Pages?**
- Wait 5-10 minutes after enabling GitHub Pages
- Make sure the repository is public
- Check that you selected the correct branch (main)

## ❤️ Made with Love

Created with HTML, CSS, JavaScript, and lots of love! Perfect for Valentine's Day 2025 (or any day you want to ask someone special).

---

Good luck! May your valentine say YES! 💕✨
