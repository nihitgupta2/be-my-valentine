# 💕 GIF Download & Setup Guide

This guide will help you download Valentine-themed GIFs and add them to your project.

## 📁 Folder Structure

Your GIFs should be saved in:
```
D:\Repo-Fun\assets\images\
```

## 🎯 GIFs You Need

You need **7 GIFs** for all game levels:

| File Name | Used For | Recommended Search Terms |
|-----------|----------|-------------------------|
| `landing.gif` | Landing page | "valentine hearts animated", "be my valentine" |
| `level1.gif` | Level 1: Running Button | "romantic hearts", "love hearts sparkle" |
| `level2.gif` | Level 2: Memory Match | "pookie bear cute", "valentine teddy bear" |
| `level3.gif` | Level 3: Three Doors | "valentine surprise", "romantic excitement" |
| `level4.gif` | Level 4: Catch Hearts | "floating hearts", "hearts animation" |
| `level5-happy.gif` | Level 5: Happy Teddy | "happy teddy bear", "teddy bear dancing" |
| `level5-sad.gif` | Level 5: Sad Teddy | "sad teddy bear", "crying teddy bear" |
| `celebration.gif` | Final Celebration | "celebration fireworks", "party celebration hearts" |

## 📥 How to Download GIFs

### Option 1: Giphy (Recommended)

1. **Go to [Giphy.com](https://giphy.com)**

2. **Search for your GIF**
   - Example: "valentine teddy bear"
   - Example: "pookie bear love"
   - Example: "romantic hearts"

3. **Download the GIF**
   - Click on the GIF you like
   - Click the **Download** button (usually top right)
   - Choose **Source** or **HD** quality
   - Save to `D:\Repo-Fun\assets\images\`
   - Rename to match the table above (e.g., `landing.gif`)

### Option 2: Tenor

1. **Go to [Tenor.com](https://tenor.com)**

2. **Search for your GIF**
   - Same search terms as above

3. **Download the GIF**
   - Click on the GIF
   - Right-click → **Save image as...**
   - Save to `D:\Repo-Fun\assets\images\`
   - Rename appropriately

### Option 3: Download Directly via URL

If you already have GIF URLs from Giphy/Tenor:

```bash
# Navigate to images folder
cd D:\Repo-Fun\assets\images

# Download using curl (if available)
curl -o landing.gif "GIPHY_URL_HERE"

# OR use PowerShell
Invoke-WebRequest -Uri "GIPHY_URL_HERE" -OutFile "landing.gif"
```

## 🔍 Best Search Terms for Valentine GIFs

### Landing Page
- "valentine hearts animated"
- "be my valentine glitter"
- "love hearts floating"

### Level 1 (Running Button)
- "romantic hearts sparkle"
- "valentine love hearts"
- "animated hearts pink"

### Level 2 (Memory Match)
- "pookie bear cute"
- "valentine teddy bear waving"
- "cute bear love"

### Level 3 (Three Doors)
- "valentine surprise"
- "excited valentine"
- "romantic excitement"
- "love surprise"

### Level 4 (Catch Hearts)
- "floating hearts pink"
- "hearts flying animation"
- "valentine hearts floating"

### Level 5 (Happy Teddy)
- "happy teddy bear dancing"
- "teddy bear celebrate"
- "cute bear happy valentine"

### Level 5 (Sad Teddy)
- "sad teddy bear crying"
- "teddy bear sad"
- "crying bear valentine"

### Celebration
- "celebration fireworks hearts"
- "party popper valentine"
- "confetti hearts celebration"
- "valentine celebration"

## 💡 Tips for Choosing Good GIFs

### Size & Performance
- **Keep GIF file size under 2MB** for fast loading
- **Ideal dimensions**: 300x300 to 500x500 pixels
- Smaller GIFs = faster page load

### Quality Checklist
✅ Clear and not pixelated
✅ Appropriate loop (doesn't look jerky)
✅ Valentine/romantic theme
✅ Cute and appropriate (no weird/creepy vibes)
✅ Good colors (pinks, reds, pastels)

### Avoid
❌ Office memes or workplace humor
❌ Birthday GIFs
❌ Too dark or aggressive themes
❌ Extremely large file sizes (>3MB)
❌ Low quality or heavily compressed

## ✅ After Downloading

Once you've downloaded all GIFs, your folder should look like:

```
D:\Repo-Fun\assets\images\
├── landing.gif
├── level1.gif
├── level2.gif
├── level3.gif
├── level4.gif
├── level5-happy.gif
├── level5-sad.gif
└── celebration.gif
```

### Verify Files

```bash
# List all GIFs in the folder
ls assets/images/*.gif
```

## 🔄 Already Updated!

Your `index.html` has already been updated to use local GIF paths:
- `assets/images/landing.gif`
- `assets/images/level1.gif`
- etc.

Once you add the GIF files to the folder, they'll work automatically!

## 🚀 Quick Download Checklist

- [ ] Create `assets/images/` folder ✅ (already done!)
- [ ] Download `landing.gif`
- [ ] Download `level1.gif`
- [ ] Download `level2.gif`
- [ ] Download `level3.gif`
- [ ] Download `level4.gif`
- [ ] Download `level5-happy.gif`
- [ ] Download `level5-sad.gif`
- [ ] Download `celebration.gif`
- [ ] Test in browser
- [ ] Commit and push to GitHub

## 🎨 Need Help Finding Specific GIFs?

I can help you find specific GIF URLs if you tell me:
1. What vibe you want (cute, romantic, funny, etc.)
2. Any specific characters (teddy bears, hearts, couples)
3. Color preferences (pink, red, pastel, etc.)

---

**After downloading, just open `index.html` in your browser to see your custom GIFs!** 💕
