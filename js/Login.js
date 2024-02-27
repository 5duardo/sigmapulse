// Selecciona el elemento de fondo
const background = document.querySelector('.background');

// Define la animación para el fondo
function animateBackground() {
    background.style.animation = 'animateGradient 5s linear infinite';
}

// Ejecuta la animación cuando la página se carga completamente
window.onload = function() {
    animateBackground();
};
