let rangeFoiz = document.getElementById('range');
let rasmBrightness = document.getElementsByClassName('container')[0];
let rangeCont = document.getElementById('rangeCont');
let rasmContrast = document.getElementsByClassName('container')[0];

rangeFoiz.addEventListener('change', () => {
    rasmBrightness.style.filter = 'brightness(' + rangeFoiz.value + '%)';
});

rangeCont.addEventListener('change', () => {
    rasmContrast.style.filter = 'contrast(' + rangeCont.value + '%)';
});