let valeurs = {};
const elements = document.querySelectorAll('.home, .competences, .portfolio, .cv, .coordonnees, .autre');

function obtenirValeur(element, propriete) {
    const computedColor = window.getComputedStyle(element).getPropertyValue(propriete);
    return computedColor === 'rgb(35, 134, 54)' ? 1 : 0;
}

document.addEventListener('DOMContentLoaded', function() {
    elements.forEach(element => {
        element.addEventListener('click', function() {
            location.replace("../" + this.id);
        });
    });
});