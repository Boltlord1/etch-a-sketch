const board = document.querySelector('#board');

function createBoard(rowSize, columnSize) {
    const rows = [];
    const columns = [];
    for (let i = 0; i < columnSize; i++) rows.push(document.createElement('div'));
    for (i = 0; i < rowSize; i++) columns.push([]);
    let l = 0
    function addArray(item) {
        for (let j = 0; j < rowSize; j++) item.push(document.createElement('div'));
        function addClasses(obj) {
            obj.classList.add('pixel');
            for (i = 0; i < rowSize; i++) rows[l].appendChild(obj);
        }
        item.forEach(addClasses);
        l++;
    }
    function appendRows(item) {
        item.classList.add('row');
        board.appendChild(item);
    }
    rows.forEach(appendRows);
    columns.forEach(addArray);

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
    const rows = document.querySelectorAll('.row')
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => pixel.remove());
    rows.forEach((row) => row.remove());
}

function reset() {
    deleteBoard();
    let rowSize = prompt('Number of Rows?', 16)
    let columnSize = prompt('Pixels per Row?', 16)
    if (rowSize <= 100 && columnSize <= 100) {
        createBoard(rowSize, columnSize);
    }
}
const button = document.querySelector('#button')
button.addEventListener('click', reset)