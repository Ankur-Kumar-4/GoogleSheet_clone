let activeCell = null;

const cellName = document.getElementById("cell-name");


function OncellFocus(e){
    activeCell = e.target.id;
    cellName.innerText=activeCell;
}