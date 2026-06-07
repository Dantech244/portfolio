const cursor = document.querySelector('.custom-cursor');
const dot = document.querySelector('.custom-cursor-dot');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Enregistre les positions de la vraie souris
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Le point central suit immédiatement
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

// Boucle d'animation pour l'effet de retard fluide (Smooth effect)
function animateCursor() {
    let delay = 0.15; // Ajuste cette valeur pour modifier l'effet de glissement
    
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Détection des survols pour animer le cercle
function initCursorInteractions() {
    const clickables = document.querySelectorAll('a, button, input, textarea, .selector-btn');
    
    clickables.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
        });
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initCursorInteractions();
});