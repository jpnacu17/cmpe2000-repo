



onload = ()=> {
document.querySelector("#makeid").onchange = UpdateMake;
document.querySelector("#test").onclick = UpdateModel;
//document.querySelectorAll(".modelclass").onclick = UpdateModel;
document.querySelectorAll(".modelclass").forEach((element)=>{
    element.onclick = UpdateModel

    //validate function: binding the onsubmit event to the form
    document.querySelector("form").onsubmit = validation;
    
})

}
//step 1
function UpdateMake(){
    //uncheck all model radio buttons 
    //use queryseel.ector all
    let radio = document.querySelectorAll(".modelclass");
    console.log(radio.length);
    for( i = 0; i <radio.length; i++){
        radio[i].checked = false; //should hopefullt uncheck the buttons

    }
    
    UpdateStatus("radio selected");
}
function UpdateStatus(message){
//invoke within UDpateMake()
// display input into text at the bottom of the webpage
// let text = document.querySelector("#textid")
// text.remove();
//let display = document.createElement("p");
let display = document.querySelector("#display");
display.innerHTML = message;
//display.setAttribute("id", "textid");
//document.querySelector("#display").append(display);
}

function UpdateModel(){
// let value = this.value;

let value = document.querySelector(".modelclass:checked").value;
console.log(value);

if(value<=10000){
let check = document.querySelectorAll(".optionsclass");
for( i = 0; i <check.length; i++){
check[i].checked = false;
}
}
}



function validation(){
    // let make = document.querySelectorAll(".makeclass");
    // console.log(make);
    alert("validate error")
    return false;

}