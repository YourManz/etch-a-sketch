const canvasDiv = document.querySelector('.canvas');
const inputSlider = document.querySelector('.js-slider-input');
const clearButton = document.querySelector('.test-button');
let mouseDown = false;
let gridToggle = true;

addGrid();

const gridButton = document.querySelector('.js-toggle-grid');

gridButton.addEventListener('click', (event) => {
    toggleButton(event);
    toggleGrid();
});

function toggleGrid() {
    const colorDivs = document.querySelectorAll('.color-div');
    
    if (gridToggle) {
        colorDivs.forEach((colorDiv) => {
            colorDiv.style.border = '0px solid rgb(0,0,0)';
        });
        gridToggle = false;
    } else if (!gridToggle) {
        colorDivs.forEach((colorDiv) => {
            colorDiv.style.border = '1px solid rgb(136, 136, 136)';
        });
        gridToggle = true;
    };
};


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

            colorDiv.addEventListener('mousedown', (event) => {
                addColor(event)
                mouseDown=true;
            });
            colorDiv.addEventListener('mouseup', (event) => {
                mouseDown=false;
            });
            colorDiv.addEventListener('mouseenter', (event) => {
                if (mouseDown) {
                    addColor(event);
                }
            })
        };
    };
if (!gridToggle) {
    toggleGrid();

}
}

function addColor(event) {
    if (rainbowMode) {
        pickRainbow(event);
        return;
    } else if (eraserMode) {
        pickEraser(event);
        return;
    }
    const colorPicker = document.querySelector('.js-color-picker').value;
    event.target.style.backgroundColor = 'white';
    event.target.style.backgroundColor = `${colorPicker}`;
}

const eraserButton = document.querySelector('.js-eraser');
let eraserMode = false;
eraserButton.addEventListener('click' , (event) => {
    toggleButton(event);
    if (eraserMode) {
        eraserMode = false;
    } else if (!eraserMode) {
        eraserMode = true;
    }
});

function pickEraser(event) {
    const colorPicker = document.querySelector('.js-color-picker').value;
    event.target.style.backgroundColor = 'white';
}

let rainbowMode = false;

const rainbowButton = document.querySelector('.js-rainbow-mode');
rainbowButton.addEventListener('click', (event) => {
    toggleButton(event);
    if (rainbowMode) {
        rainbowMode = false;
    } else if (!rainbowMode) {
        rainbowMode = true;
    }
});

function pickRainbow(event) {
    const colorPicker = document.querySelector('.js-color-picker').value;
    event.target.style.vackgroundColor = 'white';
    event.target.style.backgroundColor = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)}, ${randomNumber(0, 255)})`;
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

function toggleButton(event) {
    event.target.classList.toggle('toggle-button');
}