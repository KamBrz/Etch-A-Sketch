
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

function createGrid() {
    for (let i = 0; i < sideSize; i++) {
        const box = document.createElement('div');
        box.classList.add('horizontalBox');
        container.appendChild(box);
        for (let j = 0; j < sideSize; j++) {
            const innerBox = document.createElement('div');
            innerBox.classList.add('verticalBox');
            box.appendChild(innerBox);
        };
    };
};

createGrid();