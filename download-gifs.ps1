# PowerShell Script to Download GIFs
# Run this script to automatically download all GIFs

Write-Host "🎨 Downloading Valentine GIFs..." -ForegroundColor Magenta

# Create images directory if it doesn't exist
$imagesDir = "assets/images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force | Out-Null
}

# GIF URLs and filenames
$gifs = @{
    "landing.gif" = "https://media.giphy.com/media/l0HlSLbAuCRBTqJnW/giphy.gif"
    "level1.gif" = "https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"
    "level2.gif" = "https://media.giphy.com/media/d8fBXBsGWfHSXbWBBq/giphy.gif"
    "level3.gif" = "https://media.giphy.com/media/xTiTnH6CXkg5vbGU80/giphy.gif"
    "level5-happy.gif" = "https://media.giphy.com/media/3oEdv5e5Zd2gsczAli/giphy.gif"
    "level5-sad.gif" = "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif"
    "celebration.gif" = "https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif"
}

$downloadCount = 0
$totalGifs = $gifs.Count

foreach ($filename in $gifs.Keys) {
    $url = $gifs[$filename]
    $outputPath = Join-Path $imagesDir $filename

    Write-Host "  ⬇️  Downloading $filename..." -ForegroundColor Cyan

    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        Write-Host "  ✅ Downloaded $filename" -ForegroundColor Green
        $downloadCount++
    }
    catch {
        Write-Host "  ❌ Failed to download $filename" -ForegroundColor Red
        Write-Host "     Error: $_" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "📊 Downloaded $downloadCount of $totalGifs GIFs" -ForegroundColor Magenta

# Note about level4.gif
if (-not (Test-Path (Join-Path $imagesDir "level4.gif"))) {
    Write-Host ""
    Write-Host "📝 NOTE: level4.gif (Catch the Heart) was not included." -ForegroundColor Yellow
    Write-Host "   Search Giphy for 'floating hearts valentine' and download manually" -ForegroundColor Yellow
    Write-Host "   Save as: assets/images/level4.gif" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Done! Check the assets/images folder." -ForegroundColor Green
Write-Host "   Open index.html in your browser to test!" -ForegroundColor Cyan
