const music = document.getElementById('birthdayMusic');

// Auto-play music when page loads
// window.onload = function() {
//     music.play().catch(e => {
//         console.log('Auto-play prevented:', e);
//         // If autoplay is blocked, user can click anywhere to start
//         document.body.addEventListener('click', function() {
//             music.play();
//         }, { once: true });
//     });
// };

window.onload = function() {
    music.play();
    
};
// Cut Cake
function cutCake() {
    const cake = document.querySelector('.cake');
    const btn = document.querySelector('.cut-cake-btn');
    
    // Animate cake cutting
    cake.style.transform = 'scale(0.8)';
    cake.style.opacity = '0.5';
    btn.style.display = 'none';
    
    // Create cake pieces animation
    setTimeout(() => {
        createCakePieces();
        setTimeout(() => {
            window.location.href = 'page4.html';
        }, 1500);
    }, 500);
}

// Create cake pieces
function createCakePieces() {
    const cake = document.querySelector('.cake');
    const pieces = 6;
    
    for (let i = 0; i < pieces; i++) {
        const piece = document.createElement('div');
        piece.style.position = 'absolute';
        piece.style.width = '40px';
        piece.style.height = '40px';
        piece.style.background = '#ff6b9d';
        piece.style.borderRadius = '5px';
        piece.style.top = '50%';
        piece.style.left = '50%';
        piece.style.transition = 'all 1s ease';
        cake.appendChild(piece);
        
        setTimeout(() => {
            const angle = (i * 60) * Math.PI / 180;
            const distance = 100;
            piece.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${i * 60}deg)`;
            piece.style.opacity = '0';
        }, 100);
    }
}