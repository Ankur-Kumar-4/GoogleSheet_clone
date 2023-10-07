const cellName = document.getElementById("cell-name");
const textAlignElement = document.getElementsByClassName("text_align");
const boldBtn = document.getElementById("bold");
let activeCell = null;

const default_optionState = {
    fontFamily:"",
    isBoldSelected: false,
    isItalicSelected:false,
    isUnderlineSelected:false,
    textAlign:'left',  // it can have "left"| "right"|"center"
    textColor:"#000",
    backgroundColor: "#fff",
    fontSize:14,
};

const activeOptionState = {};

function highlightOptionsButton() {
    
if(activeOptionState.isBoldSelecte && !boldBtn.classList.contains("active-option")){
    boldBtn.classList.add("active-option");
}else{
    boldBtn.classList.remove("active-option");
}


}



function OncellFocus(e){

    if (activeCell && activeCell.id === e.target.id){
        
        return;

    }
    activeCell = e.target;
    cellName.innerText=e.target.id;

    const computedStyle = getComputedStyle(activeCell);

    const activeOptionState = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight ==="600",
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderlineSelected: computedStyle.fontStyle === "underline",
    textAlign:computedStyle.textAlign,
    textColor:computedStyle.color,
    backgroundColor:computedStyle.backgroundColor,
    fontSize:computedStyle.fontSize,
    }
    
    highlightOptionsButton();
}


function onClickBold(boldButton){
    // this func will be tiggered when user clicks on bold button.

    boldButton.classList.toggle("active-option");
    // const selectedCell = document.getElementById(activeCell);

        if(activeCell){           

            if(activeOptionState.isBoldSelected == false){
                activeCell.style.fontWeight="600";
              

            }else{
                activeCell.style.fontWeight="400"
                
            }
            activeOptionState.isBoldSelected = !activeOptionState.isBoldSelected;
        }
   

}



function onClickItalic (italicButton){

    italicButton.classList.toggle("active-option");

    if(activeCell){
        
        if(activeOptionState.isItalicSelected){
            activeCell.style.fontStyle = "normal";
            activeOptionState.isItalicSelected = false;
        }else{
            activeCell.style.fontStyle = "italic";
            activeOptionState.isItalicSelected = true;
        }

    }
}


function onClickUnderline(underlineButton) {
    underlineButton.classList.toggle("active-option");

    if(activeCell){

        if (activeOptionState.isUnderlineSelected){
            activeCell.style.textDecoration = "none";
        }else{
            activeCell.style.textDecoration = "underline";
        }
        activeOptionState.isUnderlineSelected = !activeOptionState.isUnderlineSelected;
    }
}

function highlightTextAlignBtn(textAlignValue) {

   

    for (let i = 0 ; i < textAlignElement.length ; i++){

        if(textAlignElement[i].getAttribute("data-value") == textAlignValue){

            textAlignElement[i].classList.add("active-option");

        } else {
            textAlignElement[i].classList.remove("active-option");
        
        }
    }
}


function onClickTextAlign (textAlignButton){
     
    let selectedVal = textAlignButton.getAttribute("data-value");
    highlightTextAlignBtn(selectedVal);

    if (activeCell){

        activeCell.style.textAlign = selectedVal;
        
        activeOptionState.textAlign = selectedVal;

    }
}

function changeTextColor(changeColor) {
    
    const selectedColor = changeColor.value;

   if (activeCell){

       activeCell.style.color= selectedColor;

       activeOptionState.textColor = selectedColor;

   }

}

function changeBgColor(bgColor) {
    
    const selectedColor = bgColor.value;

   if (activeCell){

       activeCell.style.backgroundColor= selectedColor;

       activeOptionState.backgroundColor = selectedColor;

   }

}

