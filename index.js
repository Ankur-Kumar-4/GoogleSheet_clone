const header = document.getElementById("header");
const body = document.getElementById("body");
const sheet_container =  document.getElementById("add_sheet_container");


for (let i=65;i<=90;i++){
    let char = String.fromCharCode(i);
    const bold = document.createElement("b");
    bold.innerText=char;
    header.appendChild(bold);
    
}


//insid each row we should create 27 cellls one for S.no



function appendCells(rowNumber){
    const row1 = document.createElement("div");
    row1.className="row";
    for (let i=65;i<=90;i++){

            const cell = document.createElement("div");
            cell.id=`${String.fromCharCode(i)}${rowNumber}`
            cell.contentEditable="true";
            cell.addEventListener("focus",OncellFocus)
            row1.appendChild(cell);
    
    }

    body.appendChild(row1)
}

for(let i=1;i<=100;i++){
    appendCells(i);
}

const sl_container = document.getElementById("sl_container");

for (let i = 1; i <= 100; i++) {
  const sl = document.createElement("div");
  sl.className = "sl-no";
  sl.innerText = i;
  sl_container.appendChild(sl);
}

let i = 1;
document.getElementById("addSheet_btn").addEventListener("click",()=>{
    let sheet = document.createElement("div");
    sheet.innerHTML=`<div class="sheet" id="${i}" onclick="active_clss(this)">
         <span>Sheet ${i}</span>
         </div>
    `
    sheet_container.appendChild(sheet);
    i++;
});

function active_clss(sheetBtn) {
    sheetBtn.classList.toggle("active-option");
}

