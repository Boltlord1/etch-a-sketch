const board = document.querySelector('#board');

function createBoard(rowCount, rowLength) {
    const rows = [];
    const length = [];
    for (let i = 0; i < rowCount; i++) rows.push(document.createElement('div'));
    for (let i = 0; i < rowLength; i++) length.push([]);
    function getRandomColor() {
        function getRandomNumber() {return Math.floor(Math.random() * 256);}
        let red = getRandomNumber();
        let blue = getRandomNumber();
        let green = getRandomNumber();
        return `rgb(${red}, ${blue}, ${green})`
    }
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mousemove', () => pixel.style.backgroundColor = getRandomColor());
    });
} createBoard(16, 16);

function deleteBoard() {
    const rows = document.querySelectorAll('.row');
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => pixel.remove());
    rows.forEach((row) => row.remove());
}

function reset() {
    deleteBoard();
    let rowCount = prompt('Number of Rows? (max 100)', 16);
    let rowLength = prompt('Pixels per Row? (max 100)', 16);
    createBoard(rowCount, rowLength);
}
const button = document.querySelector('#button');
button.addEventListener('click', reset);