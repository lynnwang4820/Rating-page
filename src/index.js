//select the button change the display
let button = document.getElementsByClassName("btn-group");
let rate = 0;




for(let i = 0; i< button.length; i++){
    button[i].addEventListener("click",addSelected);
}

function addSelected(){
    removeSelected();
    this.classList.add('selected');
    rate = this.value;
    
    
}

function removeSelected(){
    for(let i = 0; i< button.length; i++){
        button[i].classList.remove('selected');
    }
}


function submitFunc(){
    sessionStorage.setItem("rate",rate);
    window.location.replace("submit.html");

}
