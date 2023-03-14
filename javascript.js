const board = document.querySelector('#board');

function createBoard(rowCount, rowLength) {
    const rows = [];
    const length = [];
    let i = 0;
    let j = 0;
    for (i = 0; i < rowCount; i++) rows.push(document.createElement('div'));
    for (i = 0; i < rowCount; i++) length.push([]);
    function appendRows(item) {
        item.classList.add('row');
        board.appendChild(item)
    }
    function addPixels(item) {
        function appendPixels(obj) {
            obj.classList.add('pixel');
            for (i = 0; i < rowLength; i++) rows[j].appendChild(obj);
        }
        for (i = 0; i < rowLength; i++) item.push(document.createElement('div'));
        item.forEach(appendPixels);
        j++
    }
    rows.forEach(appendRows);
    length.forEach(addPixels);
    function getRandomColor() {
        function getRandomNumber() {return Math.floor(Math.random() * 256);}
        let red = getRandomNumber();
        let blue = getRandomNumber();
        let green = getRandomNumber();
        return `rgb(${red}, ${blue}, ${green})`
    }
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => pixel.style.backgroundColor = getRandomColor());
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
    let rowCount = prompt('Number of Rows? (max 128)', 16);
    while (rowCount > 128) {
        rowCount = prompt('Please choose 128 or a lower number:', 16);
    }
    let rowLength = prompt('Pixels per Row? (max 128)', 16);
    while (rowLength > 128) {
        rowLength = prompt('Please choose 128 or a lower number:', 16)
    }
    createBoard(rowCount, rowLength);
}
const button = document.querySelector('#button');
button.addEventListener('click', reset);