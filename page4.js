const music = document.getElementById('birthdayMusic');

// Create final confetti when page loads and auto-play music
window.onload = function() {
    // Auto-play music
    music.play().catch(e => {
        console.log('Auto-play prevented:', e);
        // If autoplay is blocked, user can click anywhere to start
        document.body.addEventListener('click', function() {
            music.play();
        }, { once: true });
    });
    
    // Create confetti
    createFinalConfetti();
};

// Create final confetti
function createFinalConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];
    const page4 = document.getElementById('page4');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 4) + 's';
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        page4.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 8000);
    }
}