const canvasDiv = document.querySelector('.canvas');
const inputSlider = document.querySelector('.js-slider-input');
const testButton = document.querySelector('.test-button');


testButton.addEventListener('click', () => {
    canvasDiv.innerHTML = '';
    const gridNumber = inputSlider.value;
    for (let i=0; i < gridNumber; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        canvasDiv.appendChild(rowDiv);
        for (let index=0; index < gridNumber; index++) {
            const colorDiv = document.createElement('div');
            colorDiv.classList.add('color-div');
            rowDiv.appendChild(colorDiv);

            colorDiv.addEventListener('click', (event) => {
                
            })
        };
    };
});