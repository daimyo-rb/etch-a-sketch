console.log('script.js loaded');

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
            e.target.classList.add('highlight');
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