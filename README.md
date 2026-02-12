# 💕 Be My Valentine? | 5-Level Game Challenge

An interactive, fun, and adorable 5-level game to ask someone special to be your Valentine! Each level is a unique mini-game where saying "no" is technically impossible through creative and playful mechanics.

Perfect for Valentine's Day 2025! 🎮✨

## 🎯 The Challenge

Complete 5 increasingly fun levels to unlock the final celebration. Each game has a twist that makes it impossible to say no:

### Level 1: Running Button 🏃‍♂️
The classic! Try to click "No" but the button runs away from your cursor. After enough failed attempts, you'll realize "Yes" is the only option!

### Level 2: Memory Match 🎴
Match pairs of romantic cards (hearts, roses, teddy bears, chocolates). When you finish, you get one final choice between two cards: "YES!" and "no" - but the "no" card mysteriously fades away!

### Level 3: Three Doors 🚪
A shell game with a romantic twist! Three doors shuffle around. Pick any door... and it always opens to "YES! 💖" No matter which one you choose, destiny has already decided!

### Level 4: Catch the Heart ❤️
Multiple floating hearts appear on screen. Click any "Yes!" heart to win! There's one "no" heart, but try catching it... it runs away faster than you can move your mouse!

### Level 5: Teddy's Wish 🧸
The final test! Choose between a happy teddy bear with "YES!" or a sad crying teddy with "no". Hover over "no" and watch teddy cry harder as the button runs away. Can you really make teddy sad?

### Final Celebration 🎉
Complete all 5 levels and enjoy a massive confetti celebration with your victory!

## ✨ Features

- 🎮 **5 Unique Mini-Games**: Each with different mechanics that make "no" impossible
- 💾 **Progress Saving**: Your progress is saved automatically (localStorage)
- 🏆 **Progress Tracker**: See which levels you've completed at the top of the screen
- 📱 **Mobile Friendly**: Works perfectly on phones and tablets with touch support
- 💝 **Valentine's Themed**: Cute pink design with romantic GIFs throughout
- 🎨 **Beautiful Animations**: Floating hearts, confetti, smooth transitions
- 🚀 **No Dependencies**: Pure vanilla HTML, CSS, and JavaScript

## 🚀 Quick Start

### Option 1: Play Locally

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start playing! No installation needed.

### Option 2: Deploy to GitHub Pages

1. **Create a GitHub repository**
   ```bash
   # Navigate to the project folder
   cd D:\Repo-Fun

   # Initialize git
   git init
   git add .
   git commit -m "Add Valentine's 5-level game 💕"
   git branch -M main
   ```

2. **Push to GitHub**
   - Create a new repository on [GitHub](https://github.com)
   - Name it something like `valentine-game-2025` or `be-my-valentine`
   - Make it public (required for GitHub Pages)

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Wait 2-3 minutes for deployment

4. **Share the link!**
   - Your game will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Send this link to your special someone! 💕

## 🎮 How to Play

1. **Start the game** from the landing page
2. **Complete each level** in sequence (levels unlock one at a time)
3. **Try clicking "No"** in each game (spoiler: it won't work! 😉)
4. **Progress is saved** - you can close the browser and come back later
5. **Celebrate** when all 5 levels are complete!

## 🎨 Customization Guide

### Change the GIFs

Edit the `src` attributes in `index.html`:

```html
<!-- Landing page GIF -->
<img src="YOUR_VALENTINE_GIF_URL_HERE" alt="Valentine hearts" class="gif">
```

**Where to find Valentine GIFs:**
- [Giphy](https://giphy.com) - Search: "valentine teddy bear", "pookie bear love", "valentine hearts"
- [Tenor](https://tenor.com) - Search: "be my valentine", "romantic love", "cute valentine"

**IMPORTANT**: Use Valentine-themed GIFs only (teddy bears, hearts, romantic couples). NO office memes or birthday GIFs!

### Customize Messages

Personalize the messages in `index.html`:

```html
<h1>Your custom message!</h1>
<p>Add something special that's meaningful to both of you</p>
```

### Change Colors

Edit the color scheme in `styles.css`:

```css
/* Search and replace these colors: */
#FF69B4  /* Hot Pink - main accent */
#FFB6C1  /* Light Pink - soft highlights */
#FF1493  /* Deep Pink - buttons and emphasis */
#C71585  /* Medium Violet Red - text */
```

### Adjust Game Difficulty

**Level 1 - Running Button Speed:**
In `script.js`, find the `moveButtonAway` function and adjust the transition speed (line 195):
```javascript
button.style.transition = 'all 0.1s ease';  // Lower = faster
```

**Level 1 - Number of Escape Attempts:**
Line 154 in `script.js`:
```javascript
if (level1Attempts >= 4) {  // Change 4 to make it easier/harder
```

## 📁 Project Structure

```
valentine-game/
├── index.html          # Main HTML with all 5 game levels
├── styles.css          # Complete styling with game-specific CSS
├── script.js           # All game logic and state management
└── README.md          # You're reading it!
```

## 🌐 Browser Compatibility

Tested and works perfectly on:
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ All modern mobile browsers

## 💡 Pro Tips

### For the Best Experience:
1. **Test it first** - Play through all levels before sending the link
2. **Share on mobile** - The games work great on phones!
3. **Personalize it** - Add inside jokes or references in the messages
4. **Time it right** - Send it a few days before Valentine's Day for maximum anticipation

### For Developers:
- All game state is saved in `localStorage` under the key `valentineGameState`
- To reset progress: `localStorage.clear()` in browser console
- Each level has its own `init` function called when the level loads
- Progress tracker updates automatically when levels complete

## 🐛 Troubleshooting

**GIFs not loading?**
- Make sure you're using direct GIF URLs from Giphy or Tenor
- Check your internet connection
- Try opening in an incognito/private window

**Game won't start?**
- Clear your browser cache and localStorage
- Try a different browser
- Make sure JavaScript is enabled

**Progress not saving?**
- Check if cookies/localStorage is enabled in your browser
- Some private browsing modes disable localStorage

**Button not running away on mobile?**
- The game uses touch events on mobile - make sure you're not clicking too fast
- Try a different browser (Chrome mobile recommended)

## 🎯 Game Mechanics Explained

### Why can't she say "No"?

1. **Level 1**: Button physically runs away from cursor
2. **Level 2**: The "no" card disappears after matching pairs
3. **Level 3**: All doors are rigged to show "YES!" regardless of choice
4. **Level 4**: The "no" heart escapes too fast to click
5. **Level 5**: "no" button runs away when you hover over it

It's all in good fun! The point is to be playful and romantic while creating a memorable interactive experience.

## 📱 Sharing Tips

### Cute Ways to Send the Link:
- "I made you something special... 💕 [link]"
- "Complete this challenge if you dare! 🎮 [link]"
- "I have an important question, but you have to play a game first... [link]"
- "Think you can beat all 5 levels? 😏 [link]"

### After She Plays:
The final screen says "Can't wait to spend Valentine's Day with you! ❤️" - make sure you follow through with plans!

## ❤️ Made With Love

Built with:
- HTML5
- CSS3 (with lots of pink gradients 💕)
- Vanilla JavaScript (no frameworks!)
- Love, creativity, and Valentine's spirit ✨

Perfect for Valentine's Day 2025 or any day you want to ask someone special to be yours!

## 📄 License

Feel free to use, modify, and share this project! Just remember to use it for good (romantic) purposes only. 💕

---

**Good luck! May your valentine say YES! 💖✨**

*P.S. - If she completes all 5 levels, she's definitely a keeper!* 😉
