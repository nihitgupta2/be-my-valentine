// ==================== STATE MANAGEMENT ====================
let gameState = {
    currentLevel: 0,
    completedLevels: [],
    currentScreen: 'landing'
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('valentineGameState');
    if (saved) {
        gameState = JSON.parse(saved);
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('valentineGameState', JSON.stringify(gameState));
}

// ==================== INITIALIZATION ====================
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    updateProgressTracker();
    showScreen(gameState.currentScreen);
    console.log('Valentine Game loaded! 💕');
});

// ==================== SCREEN MANAGEMENT ====================
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        gameState.currentScreen = screenId;
        saveState();

        // Initialize level-specific logic
        if (screenId === 'level1') initLevel1();
        if (screenId === 'level2') initLevel2();
        if (screenId === 'level3') initLevel3();
        if (screenId === 'level4') initLevel4();
        if (screenId === 'level5') initLevel5();
    }
}

// ==================== PROGRESS TRACKER ====================
function updateProgressTracker() {
    for (let i = 1; i <= 5; i++) {
        const item = document.querySelector(`.progress-item[data-level="${i}"]`);
        if (!item) continue;

        item.classList.remove('active', 'completed', 'unlocked');

        if (gameState.completedLevels.includes(i)) {
            item.classList.add('completed');
        } else if (i === gameState.currentLevel) {
            item.classList.add('active');
        } else if (i === gameState.completedLevels.length + 1) {
            item.classList.add('unlocked');
        }
    }
}

// ==================== GAME START ====================
function startGame() {
    gameState.currentLevel = 1;
    saveState();
    updateProgressTracker();
    showScreen('level1');
}

// ==================== LEVEL COMPLETION ====================
function completeLevel(levelNum) {
    if (!gameState.completedLevels.includes(levelNum)) {
        gameState.completedLevels.push(levelNum);
    }
    saveState();
    updateProgressTracker();

    // Show victory screen
    const victoryMessages = {
        1: { title: '🎉 Level 1 Complete! 🎉', message: 'You knew the right answer!' },
        2: { title: '💝 Level 2 Complete! 💝', message: 'Your memory is amazing!' },
        3: { title: '✨ Level 3 Complete! ✨', message: 'Destiny chose yes!' },
        4: { title: '💗 Level 4 Complete! 💗', message: 'You caught my heart!' },
        5: { title: '🎊 Level 5 Complete! 🎊', message: 'Teddy is so happy!' }
    };

    document.getElementById('victoryTitle').textContent = victoryMessages[levelNum].title;
    document.getElementById('victoryMessage').textContent = victoryMessages[levelNum].message;

    if (levelNum === 5) {
        // All levels complete! Go straight to celebration
        setTimeout(() => {
            showScreen('celebration');
            createConfetti();
        }, 2000);
    } else {
        showScreen('victory');
    }
}

function goToNextLevel() {
    const nextLevel = gameState.completedLevels.length + 1;
    if (nextLevel <= 5) {
        gameState.currentLevel = nextLevel;
        saveState();
        updateProgressTracker();
        showScreen(`level${nextLevel}`);
    }
}

// ==================== LEVEL 1: RUNNING BUTTON ====================
let level1Attempts = 0;

function initLevel1() {
    level1Attempts = 0;
    const noBtn = document.getElementById('noBtn1');
    if (!noBtn) return;

    // Reset button position
    noBtn.style.position = 'relative';
    noBtn.style.left = '0';
    noBtn.style.top = '0';

    // Add mouse move listener
    document.addEventListener('mousemove', handleLevel1Mouse);
    document.addEventListener('touchmove', handleLevel1Touch);
}

function handleLevel1Mouse(e) {
    const noBtn = document.getElementById('noBtn1');
    if (!noBtn || gameState.currentScreen !== 'level1') return;

    const btnRect = noBtn.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const distance = Math.sqrt(
        Math.pow(e.clientX - btnCenterX, 2) +
        Math.pow(e.clientY - btnCenterY, 2)
    );

    if (distance < 100) {
        moveButtonAway(noBtn, e.clientX, e.clientY);
        level1Attempts++;

        if (level1Attempts >= 4) {
            setTimeout(() => {
                if (gameState.currentScreen === 'level1') {
                    completeLevel(1);
                }
            }, 500);
        }
    }
}

function handleLevel1Touch(e) {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    handleLevel1Mouse({ clientX: touch.clientX, clientY: touch.clientY });
}

function moveButtonAway(button, mouseX, mouseY) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const btnRect = button.getBoundingClientRect();

    let newX, newY;

    if (mouseX < viewportWidth / 2) {
        newX = viewportWidth - btnRect.width - 50 - Math.random() * 100;
    } else {
        newX = 50 + Math.random() * 100;
    }

    if (mouseY < viewportHeight / 2) {
        newY = viewportHeight - btnRect.height - 150 - Math.random() * 100;
    } else {
        newY = 150 + Math.random() * 100;
    }

    newX = Math.max(20, Math.min(viewportWidth - btnRect.width - 20, newX));
    newY = Math.max(120, Math.min(viewportHeight - btnRect.height - 20, newY));

    button.style.position = 'fixed';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.transition = 'all 0.1s ease';
}

// ==================== LEVEL 2: MEMORY MATCH ====================
const cardSymbols = ['💕', '🌹', '🧸', '🍫'];
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;

function initLevel2() {
    matchedPairs = 0;
    flippedCards = [];
    memoryCards = [...cardSymbols, ...cardSymbols];
    shuffleArray(memoryCards);

    const gameContainer = document.getElementById('memoryGame');
    gameContainer.innerHTML = '';

    memoryCards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.symbol = symbol;

        card.innerHTML = `
            <div class="card-front">?</div>
            <div class="card-back">${symbol}</div>
        `;

        card.addEventListener('click', () => flipCard(card));
        gameContainer.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length >= 2) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.dataset.symbol;
    const symbol2 = card2.dataset.symbol;

    if (symbol1 === symbol2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;

        flippedCards = [];

        if (matchedPairs === 4) {
            setTimeout(showFinalChoice, 1000);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function showFinalChoice() {
    document.getElementById('memoryGame').style.display = 'none';
    document.getElementById('finalChoice').classList.remove('hidden');

    // Flip both cards after a delay
    setTimeout(() => {
        document.querySelectorAll('.final-yes, .final-no').forEach(card => {
            card.classList.add('flipped');
        });
    }, 500);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==================== LEVEL 3: THREE DOORS ====================
let doorsShuffled = false;

function initLevel3() {
    doorsShuffled = false;
    document.getElementById('doorResult').classList.add('hidden');
    document.getElementById('shuffleBtn').style.display = 'inline-block';

    // Reset doors
    document.querySelectorAll('.door').forEach(door => {
        door.classList.remove('opened');
        door.style.pointerEvents = 'none';
    });
}

function shuffleDoors() {
    const doors = Array.from(document.querySelectorAll('.door'));
    const container = document.getElementById('doorsContainer');

    // Shuffle animation
    let shuffles = 0;
    const maxShuffles = 6;
    const shuffleInterval = setInterval(() => {
        shuffleArray(doors);
        container.innerHTML = '';
        doors.forEach(door => container.appendChild(door));

        shuffles++;
        if (shuffles >= maxShuffles) {
            clearInterval(shuffleInterval);
            doorsShuffled = true;
            document.getElementById('shuffleBtn').style.display = 'none';

            // Enable doors
            doors.forEach(door => {
                door.style.pointerEvents = 'auto';
            });
        }
    }, 400);
}

function chooseDoor(doorNum) {
    if (!doorsShuffled) return;

    const door = document.querySelector(`.door[data-door="${doorNum}"]`);
    if (!door || door.classList.contains('opened')) return;

    // Disable all doors
    document.querySelectorAll('.door').forEach(d => {
        d.style.pointerEvents = 'none';
    });

    // Always show YES! (rigged)
    door.querySelector('.door-back').innerHTML = 'YES! 💖';
    door.classList.add('opened');

    setTimeout(() => {
        const result = document.getElementById('doorResult');
        result.textContent = 'See? It was meant to be! 💕';
        result.classList.remove('hidden');

        setTimeout(() => {
            completeLevel(3);
        }, 2000);
    }, 800);
}

// ==================== LEVEL 4: CATCH THE HEART ====================
function initLevel4() {
    const container = document.getElementById('heartsContainer');
    container.innerHTML = '';

    // Create 5 Yes hearts
    for (let i = 0; i < 5; i++) {
        createHeart(container, 'Yes!', true, i);
    }

    // Create 1 No heart
    createHeart(container, 'no', false, 5);

    // Setup no heart escape
    document.addEventListener('mousemove', handleLevel4Mouse);
    document.addEventListener('touchmove', handleLevel4Touch);
}

function createHeart(container, text, isYes, index) {
    const heart = document.createElement('div');
    heart.className = `floating-heart ${isYes ? 'yes-heart' : 'no-heart'}`;
    heart.textContent = text;
    heart.dataset.isYes = isYes;

    // Random position
    const maxX = container.offsetWidth - 80;
    const maxY = container.offsetHeight - 80;
    heart.style.left = Math.random() * maxX + 'px';
    heart.style.top = Math.random() * maxY + 'px';

    // Random animation delay
    heart.style.animationDelay = Math.random() * 2 + 's';

    if (isYes) {
        heart.addEventListener('click', () => {
            heart.style.transform = 'scale(2)';
            heart.style.opacity = '0';
            setTimeout(() => {
                completeLevel(4);
            }, 300);
        });
    }

    container.appendChild(heart);
}

function handleLevel4Mouse(e) {
    if (gameState.currentScreen !== 'level4') return;

    const noHeart = document.querySelector('.no-heart');
    if (!noHeart) return;

    const rect = noHeart.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) +
        Math.pow(e.clientY - centerY, 2)
    );

    if (distance < 80) {
        const container = document.getElementById('heartsContainer');
        const maxX = container.offsetWidth - 80;
        const maxY = container.offsetHeight - 80;

        let newX, newY;
        if (e.clientX < container.offsetWidth / 2) {
            newX = maxX - Math.random() * 50;
        } else {
            newX = Math.random() * 50;
        }

        if (e.clientY < container.offsetHeight / 2 + 200) {
            newY = maxY - Math.random() * 50;
        } else {
            newY = Math.random() * 50;
        }

        noHeart.style.left = newX + 'px';
        noHeart.style.top = newY + 'px';
        noHeart.style.transition = 'all 0.05s ease';
    }
}

function handleLevel4Touch(e) {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    handleLevel4Mouse({ clientX: touch.clientX, clientY: touch.clientY });
}

// ==================== LEVEL 5: TEDDY BEAR CHOICE ====================
function initLevel5() {
    document.getElementById('teddyMessage').textContent = 'Hover over the buttons...';
}

function teddyHover(side) {
    const happySide = document.querySelector('.happy-side');
    const sadSide = document.querySelector('.sad-side');
    const message = document.getElementById('teddyMessage');
    const noBtn = document.getElementById('noBtn5');

    happySide.classList.remove('active');
    sadSide.classList.remove('active');

    if (side === 'yes') {
        happySide.classList.add('active');
        message.textContent = 'Yes! Make teddy happy! 💕';
    } else if (side === 'no') {
        sadSide.classList.add('active');
        message.textContent = 'Please don\'t make teddy sad! 🥺';

        // Make no button run away
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const newX = Math.random() * (viewportWidth - 150);
        const newY = Math.random() * (viewportHeight - 250) + 200;

        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        noBtn.style.transition = 'all 0.2s ease';
    } else {
        message.textContent = 'Hover over the buttons...';
    }
}

// ==================== CONFETTI ====================
function createConfetti() {
    const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#FFC0CB', '#FF69B4'];
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 20);
    }
}

// ==================== RESET GAME ====================
function resetGame() {
    gameState = {
        currentLevel: 0,
        completedLevels: [],
        currentScreen: 'landing'
    };
    saveState();
    updateProgressTracker();
    showScreen('landing');
}
