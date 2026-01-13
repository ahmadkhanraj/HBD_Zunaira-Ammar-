let lightsOn = false;
let musicPlaying = false;

const music = document.getElementById('birthdayMusic');
const page2 = document.getElementById('page2');

// Check if music should be playing from previous page
window.onload = function() {
    const musicState = sessionStorage.getItem('musicPlaying');
    if (musicState === 'true') {
        music.play().catch(e => console.log('Auto-play prevented'));
        musicPlaying = true;
    }
};

// Toggle Lights - This changes everything!
function toggleLights() {
    if (!lightsOn) {
        // Change background to bright pink/colorful
        page2.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #c06c84 50%, #ffeaa7 100%)';
        
        // Create colorful lights at top
        const lightsContainer = document.querySelector('.lights-container');
        for (let i = 0; i < 8; i++) {
            const light = document.createElement('div');
            light.className = 'light';
            lightsContainer.appendChild(light);
        }
        lightsContainer.classList.add('active');
        
        // Hide initial button
        document.getElementById('initialContainer').style.display = 'none';
        
        // Show birthday content
        const celebrationContent = document.getElementById('celebrationContent');
        celebrationContent.style.display = 'block';
        
        // Show buttons one by one with delay
        setTimeout(() => {
            document.getElementById('musicBtn').style.display = 'flex';
        }, 1000);
        
        lightsOn = true;
    }
}

// Play Music - shows next button
function playMusic() {
    const btn = document.getElementById('musicBtn');
    
    if (!musicPlaying) {
        music.play().catch(e => {
            console.log('Music playback failed:', e);
            alert('Please interact with the page first to enable music!');
        });
        btn.querySelector('.btn-text').textContent = 'Music Playing 🎶';
        musicPlaying = true;
        
        // Save music state
        sessionStorage.setItem('musicPlaying', 'true');
        
        // Show decorate button after music starts
        setTimeout(() => {
            document.getElementById('decorateBtn').style.display = 'flex';
        }, 1000);
    }
}

// Create confetti
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        page2.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Decorate with confetti - shows next button
function decorate() {
    const btn = document.getElementById('decorateBtn');
    
    createConfetti();
    btn.querySelector('.btn-text').textContent = 'Decorated! ✨';
    btn.disabled = true;
    
    // Show balloons button after decorating
    setTimeout(() => {
        document.getElementById('balloonsBtn').style.display = 'flex';
    }, 1000);
}

// Fly Balloons - shows cake button
function flyBalloons() {
    const btn = document.getElementById('balloonsBtn');
    
    createBalloons();
    btn.querySelector('.btn-text').textContent = 'Balloons Flying! 🎈';
    btn.disabled = true;
    
    // Show cake button after balloons
    setTimeout(() => {
        document.getElementById('cakeBtn').style.display = 'flex';
    }, 2000);
}

// Create balloons
function createBalloons() {
    const colors = ['#ff6b9d', '#c06c84', '#ffeaa7', '#74b9ff', '#a29bfe', '#fd79a8'];
    const balloonsContainer = document.querySelector('.balloons-container');
    
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 90 + '%';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = Math.random() * 2 + 's';
        balloon.style.animationDuration = (Math.random() * 3 + 4) + 's';
        balloonsContainer.appendChild(balloon);
        
        // Remove after animation
        setTimeout(() => {
            balloon.remove();
        }, 8000);
    }
}

// Go to cake page
function goToCake() {
    window.location.href = 'page3.html';
}