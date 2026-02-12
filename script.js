// Current step tracking
let currentStep = 1;
let noButtonAttempts = 0;

// Configuration for button escape behavior (progressive difficulty)
const escapeConfig = {
    2: { distance: 100, speed: 0.1 },
    3: { distance: 80, speed: 0.08 },
    4: { distance: 50, speed: 0.05 },
    5: { distance: 30, speed: 0.03 }
};

// Step transition
function goToStep(stepNumber) {
    const currentStepEl = document.getElementById(`step${currentStep}`);
    const nextStepEl = document.getElementById(`step${stepNumber}`);

    // Fade out current step
    currentStepEl.style.opacity = '0';

    setTimeout(() => {
        currentStepEl.classList.remove('active');
        nextStepEl.classList.add('active');

        // Fade in next step
        setTimeout(() => {
            nextStepEl.style.opacity = '1';
        }, 50);

        // Setup escape behavior for no button on new step
        if (stepNumber >= 2 && stepNumber <= 5) {
            setupNoButtonEscape(stepNumber);
        }
    }, 500);

    currentStep = stepNumber;
}

// Setup escape behavior for No button
function setupNoButtonEscape(stepNumber) {
    const noBtn = document.getElementById(`noBtn${stepNumber === 2 ? '' : stepNumber - 1}`);

    if (!noBtn) return;

    const config = escapeConfig[stepNumber];
    let isEscaping = false;

    // Mouse move handler
    function handleMouseMove(e) {
        if (isEscaping) return;

        const btnRect = noBtn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        // Calculate distance from mouse to button center
        const distance = Math.sqrt(
            Math.pow(e.clientX - btnCenterX, 2) +
            Math.pow(e.clientY - btnCenterY, 2)
        );

        // If mouse is too close, move the button away
        if (distance < config.distance) {
            moveButtonAway(noBtn, e.clientX, e.clientY, stepNumber);
            noButtonAttempts++;

            // After enough attempts, move to next persuasion step
            if (noButtonAttempts >= 3 && stepNumber < 5) {
                setTimeout(() => {
                    goToStep(stepNumber + 1);
                    noButtonAttempts = 0;
                }, 500);
            }
        }
    }

    // Touch handler for mobile
    function handleTouchMove(e) {
        if (isEscaping) return;

        const touch = e.touches[0];
        const btnRect = noBtn.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        const distance = Math.sqrt(
            Math.pow(touch.clientX - btnCenterX, 2) +
            Math.pow(touch.clientY - btnCenterY, 2)
        );

        if (distance < config.distance) {
            moveButtonAway(noBtn, touch.clientX, touch.clientY, stepNumber);
            noButtonAttempts++;

            if (noButtonAttempts >= 3 && stepNumber < 5) {
                setTimeout(() => {
                    goToStep(stepNumber + 1);
                    noButtonAttempts = 0;
                }, 500);
            }
        }
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
}

// Move button away from cursor
function moveButtonAway(button, mouseX, mouseY, stepNumber) {
    const btnRect = button.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    // Calculate direction away from mouse
    const deltaX = btnCenterX - mouseX;
    const deltaY = btnCenterY - mouseY;

    // Normalize and scale
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const dirX = deltaX / length;
    const dirY = deltaY / length;

    // Calculate new position (move to opposite side)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newX, newY;

    // Determine which quadrant to move to (opposite of current position)
    if (mouseX < viewportWidth / 2) {
        // Mouse on left, move button to right
        newX = viewportWidth - btnRect.width - 50 - Math.random() * 100;
    } else {
        // Mouse on right, move button to left
        newX = 50 + Math.random() * 100;
    }

    if (mouseY < viewportHeight / 2) {
        // Mouse on top, move button to bottom
        newY = viewportHeight - btnRect.height - 100 - Math.random() * 100;
    } else {
        // Mouse on bottom, move button to top
        newY = 100 + Math.random() * 100;
    }

    // Ensure button stays within viewport
    newX = Math.max(20, Math.min(viewportWidth - btnRect.width - 20, newX));
    newY = Math.max(20, Math.min(viewportHeight - btnRect.height - 20, newY));

    // Apply position
    button.style.position = 'fixed';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    button.style.transition = `all ${escapeConfig[stepNumber].speed}s ease`;
}

// Celebration with confetti
function celebrate() {
    goToStep(6);

    // Create confetti
    setTimeout(() => {
        createConfetti();
    }, 500);
}

// Create confetti animation
function createConfetti() {
    const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#FFC0CB', '#FF69B4'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

            document.body.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log('Valentine website loaded! 💕');
});
