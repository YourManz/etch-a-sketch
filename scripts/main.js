const canvasDiv = document.querySelector('.canvas');
const inputSlider = document.querySelector('.js-slider-input');
const clearButton = document.querySelector('.test-button');

addGrid();

clearButton.addEventListener('click', () => {
    addGrid();
});

inputSlider.addEventListener('mouseup', () => {
    addGrid();
})

function addGrid() {
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
                    const colorPicker = document.querySelector('.js-color-picker').value;
                    event.target.style.vackgroundColor = 'white';
                    event.target.style.backgroundColor = `${colorPicker}`;
            });
        };
    };
}