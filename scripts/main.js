const canvasDiv = document.querySelector('.canvas');
const inputSlider = document.querySelector('.js-slider-input');
const testButton = document.querySelector('.test-button');



testButton.addEventListener('click', () => {
    canvasDiv.innerHTML = '';
    for (let i=0; i <= inputSlider.value * inputSlider.value; i++) {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color-div');
        canvasDiv.appendChild(colorDiv);
    };

});


