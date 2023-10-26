const canvasDiv = document.querySelector('.canvas');
const inputSlider = document.querySelector('.js-slider-input');
const testButton = document.querySelector('.test-button');


testButton.addEventListener('click', () => {
    canvasDiv.innerHTML = '';
    const gridNumber = inputSlider.value;
    for (let i=0; i < gridNumber; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column-div');
        columnDiv.classList.add(`column-${i}`);
        canvasDiv.appendChild(columnDiv);

        for (let index=0; index < gridNumber; index++) {
            const colorCreateDiv = document.createElement('div');
            colorCreateDiv.classList.add('color-div');
            colorCreateDiv.classList.add(`row-${index}`);
            columnDiv.appendChild(colorCreateDiv);
        };
    };
});

const colorDiv = document.querySelector('.color-div');
colorDiv.addEventListener('click', (event) => {
    console.log(event.classList);
})
