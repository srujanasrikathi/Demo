
var currentRow = 0;
var currentCol = 0;
var rn, cn;
var score=0;
var targetRow,targetCol; 

function createTable() {
    rn = window.prompt("Enter a value of rows");
    cn = window.prompt("Enter a value of columns");

    if (rn === null || cn === null) {
        return; 
    }

    var table = document.getElementById('Table'); 
    table.innerHTML = '';
for (var r = 0; r < parseInt(rn, 10); r++) {
        var row = table.insertRow(r);
        for (var c = 0; c < parseInt(cn, 10); c++) {
            var cell = row.insertCell(c);
            cell.innerHTML = ""; 
        }
    }
    
    placeIcon(0, 0); 
moveTargetIcon();
}

function placeIcon(row, col) {
    var previousCell = document.querySelector('.icon');
    if (previousCell) {
        previousCell.classList.remove('icon');
        previousCell.innerHTML = "";
    }

    var table = document.getElementById('Table'); 
    var cell = table.rows[row].cells[col];
    cell.innerHTML = '<div class="icon">😊</div>'; 

    currentRow = row;
    currentCol = col;

if(currentRow===targetRow && currentCol===targetCol){
    score++;
    document.getElementById('score').textContent="Score: "+score;
    moveTargetIcon();
}
}
function moveIcon(direction) {
    var newRow = currentRow;
    var newCol = currentCol;

    switch (direction) {
        case 'left':
            newCol = (currentCol == 0)?alert('No more moves') : (currentCol - 1);
            break;
        case 'right':
            newCol = (currentCol == (parseInt(cn, 10) - 1)) ? alert('No more moves') : (currentCol + 1);

            break;
        case 'up':
            newRow = (currentRow == 0) ? alert('No more moves') : (currentRow - 1);  
            break;
        case 'down':
            newRow=(currentRow==(parseInt(rn,10)-1)) ? alert('No more moves') :(currentRow +1);
            break;
        default:
            break;
    }

    placeIcon(newRow, newCol);
}
function moveTargetIcon() {
    
    do {
        targetRow = Math.floor(Math.random() * parseInt(rn, 10));
        targetCol = Math.floor(Math.random() * parseInt(cn, 10));
    } while (targetRow === currentRow && targetCol === currentCol); 

    var table = document.getElementById('Table');
    var cell = table.rows[targetRow].cells[targetCol];
    cell.innerHTML = '<div class="target-icon">🎯</div>';
}
