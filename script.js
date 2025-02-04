// script.js

// Positionne chaque élément du menu en fonction de son angle (exprimé dans l'attribut data-angle)
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.mindmap-item');
  items.forEach(item => {
    // Récupère l'angle spécifié (en degrés)
    const angle = item.getAttribute('data-angle') || 0;
    // Définition de la transformation initiale :
    // On part du centre (50%, 50%), on effectue une rotation de 'angle' degrés,
    // puis on translate de 150px (rayon du cercle), puis on annule la rotation pour garder le texte droit.
    item.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
    
    // Ajoute un effet au survol : augmentation du rayon à 160px
    item.addEventListener('mouseover', () => {
      item.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`;
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
    });
  });
});
