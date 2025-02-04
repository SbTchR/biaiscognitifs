// script.js

document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.mindmap-item');
  items.forEach(item => {
    // Récupère l'angle spécifié dans l'attribut data-angle (en degrés)
    const angle = item.getAttribute('data-angle') || 0;
    // Positionne chaque élément autour du centre en annulant la rotation
    item.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
    // La transformation hover (scale) est gérée par le CSS uniquement
  });
});

// Fonction qui applique l'effet pop-up sur le titre
function popUpTitle() {
  const title = document.querySelector('.header h1');
  if (title) {
    title.classList.add('pop-up');
  }
}

// Déclenche l'animation une fois que le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", popUpTitle);
