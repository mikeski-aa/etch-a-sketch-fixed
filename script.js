const container = document.querySelector('.container');
const xTest = container.querySelector('div');
let startingSize = 16;
let boxSize = 0;
let boxColour = '';
drawDivs(startingSize);
divSize();
scaleDivs();
hoverTest();

//function to draw new divs
function drawDivs(startingSize) {
    for (let i = 0; i < startingSize*startingSize; i++) {
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
    }
}

//function to adjust each box size to present X * X square

function scaleDivs(){
    let boxes = container.querySelectorAll('div');
    for (box of boxes) {
        box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px'`)
    }
}

//function to calculate width of each box

function divSize() {
    let dSize = 960/startingSize;
    boxSize = dSize;
    console.log(boxSize);
    return boxSize;

}

//function to hover over buttons
function hoverTest(){
    container.addEventListener('mouseover', e => {
        randColour();
        e.target.setAttribute('style', `background: ${boxColour}; width: ${boxSize}px; height: ${boxSize}px'`)  
    })
}
//button listener 
let btn = document.querySelector('.btn')
btn.addEventListener('click', function() {
    let boxes = container.querySelectorAll('div');
    for (del of boxes) {
        container.removeChild(del);
    }
    newGridSize();
    drawDivs(startingSize);
    divSize();
    scaleDivs()
});


//new grid function
function newGridSize() {
    let input = +prompt('Enter how many squares per side you\'d like to see');
    if (input >= 100) {
        alert('ERROR - you must enter a number below 100!');
        return startingSize;
    } else {
    startingSize = input;
    return startingSize;
    }
    
}

//random colour function
function randColour(){
    let letters = '0123456789ABCDEF'
    let newColour = '#';
    for (let i = 0; i < 6; i++){
        newColour += letters[Math.floor(Math.random() * 16)]
    }
    boxColour = newColour;
    return boxColour;
}


