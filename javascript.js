const board = document.querySelector('#board');
const rows = [];
const columns = [];

for (let i = 0; i < 16; i++) {
    rows.push(document.createElement('div'));
    columns.push([]);
}

let l = 0
function addArray(item) {
    for (let j = 0; j < 16; j++) item.push(document.createElement('div'));
    function addClasses(obj) {
        obj.classList.add('pixel');
        for (i = 0; i < 16; i++) rows[l].appendChild(obj);
    }
    item.forEach(addClasses);
    l++;
}

columns.forEach(addArray)

function appendRows(item) {
    item.classList.add('row');
    board.appendChild(item);
}

rows.forEach(appendRows)