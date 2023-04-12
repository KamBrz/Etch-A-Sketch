// Create body elements and containers
const body = document.querySelector('body');

const topHalf = document.createElement('div');
topHalf.classList.add('topHalf');
body.appendChild(topHalf);

const title = document.createElement('p');
title.classList.add('title');
title.textContent = 'Etch-a-Sketch';
topHalf.appendChild(title);

const container = document.createElement('div');
container.classList.add('container');
topHalf.appendChild(container);

const bottomHalf = document.createElement('div');
bottomHalf.classList.add('bottomHalf');
body.appendChild(bottomHalf);

// Create grid based on sideSize
let sideSize = 16;

function createGrid(sideSize) {
    container.innerHTML = '';
    for (let i = 0; i < sideSize; i++) {
        const box = document.createElement('div');
        box.classList.add('horizontalBox');
        container.appendChild(box);
        for (let j = 0; j < sideSize; j++) {
            const innerBox = document.createElement('div');
            innerBox.classList.add('verticalBox');
            box.appendChild(innerBox);
            innerBox.addEventListener('mouseover', () => {
                innerBox.classList.add('mouseover');
            })
        };
    };
};

createGrid(sideSize);

// Create a 'Clear' button
const clearButton = document.createElement('button');
clearButton.innerHTML = 'Clear';
clearButton.classList.add('clearButton');
bottomHalf.appendChild(clearButton);

clearButton.addEventListener('click', () => {
    let sideSize = prompt('What grid size would you like?', 'Less than 100')
    if (!isNaN(sideSize) && sideSize > 0 && sideSize < 100){
        createGrid(sideSize);
    }
});

// Create a 'Randomiser' button for onHover color
const randomButton = document.createElement('button');
randomButton.innerHTML = 'Randomise';
randomButton.classList.add('clearButton');
bottomHalf.appendChild(randomButton);

const setBg = (element) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
}

randomButton.addEventListener('click', () => {
    const innerBoxes = container.querySelectorAll('.verticalBox');
    innerBoxes.forEach(innerBox => {
        innerBox.addEventListener('mouseover', () => {
            setBg(innerBox);
        })
    });
})

// Create a 'Burn' button
const burnButton = document.createElement('button');
burnButton.innerHTML = 'Burn';
burnButton.classList.add('clearButton');
bottomHalf.appendChild(burnButton);

burnButton.addEventListener('click', () => {
    const innerBoxes = container.querySelectorAll('.verticalBox');
    innerBoxes.forEach(innerBox => {
        innerBox.addEventListener('mouseover', () => {
            innerBox.style.opacity = (parseFloat(innerBox.style.opacity) || 0) + 0.1;
        })
    })
})