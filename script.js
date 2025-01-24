console.log('script.js loaded');

function getRandomColor(){
    let redChannel = Math.floor(Math.random() * 255);
    let greenChannel = Math.floor(Math.random() * 255);
    let blueChannel = Math.floor(Math.random() * 255);
    let colorStr = `rgb(${redChannel}, ${greenChannel}, ${blueChannel})`;
    return colorStr;
}

function buildGrid(sideLength){
    const square = document.querySelector('.square');
    document.documentElement.style.setProperty('--sideLength',sideLength);
    for (let i = 0; i < sideLength**2; i++){
        const curBox = document.createElement('div');
        curBox.classList.add('cell');
        square.appendChild(curBox);
    }
    square.addEventListener("mouseover", (e) => {
        // console.log(e);
        if (e.target != square){
            // e.target.classList.add('highlight');
            // let highlightColor = 'red';
            let highlightColor = getRandomColor();
            e.target.style.backgroundColor = highlightColor;
            let curOpacity = parseFloat(e.target.style.opacity);
            (curOpacity && curOpacity < 1) 
                ? e.target.style.opacity = curOpacity + 0.1
                : e.target.style.opacity = 0.1;
        }
    });
}
function clearGrid(){
    const elements = document.querySelectorAll('.cell');
    elements.forEach(element => {
        element.remove();
    });
}
function resetButton(){
    clearGrid();
    let newSideLength = parseInt(prompt('how many boxes per side?'));
    if (newSideLength < 1){
        newSideLength = 16;
    } else if (newSideLength > 50){
        newSideLength = 50;
    }
    console.log(newSideLength);
    buildGrid(newSideLength);
}
function enableResetButton(){
    const btn = document.querySelector('button');
    btn.addEventListener("click", resetButton);
}

let initialSideLength = 8;
buildGrid(initialSideLength);
enableResetButton();