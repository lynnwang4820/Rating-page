//select the button change the display
let button = document.getElementsByClassName("btn-group");
let selectedBtn = document.getElementsByClassName("btn-group.selected");
let ratePtag = document.getElementById("rate-text");

for(let i = 0; i< button.length; i++){
    button[i].addEventListener("click",addSelected);
}

function addSelected(){
    removeSelected();
    this.classList.add('selected');
}

function removeSelected(){
    for(let i = 0; i< button.length; i++){
        button[i].classList.remove('selected');
    }
}


function submitFunc(){
    //let rate = selectedBtn.value;
    location.replace("submit.html");
    ratePtag.innerHTML = "You selected x out of 5";
    
}
