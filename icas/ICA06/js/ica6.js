
window.onload = () => {
document.querySelector("#colorbutton").onclick = changebackground;
document.querySelector("#currentdimension").onclick = obtaindimensions;
document.querySelector("#time").onclick = gettime;
document.querySelector("#agent").onclick = getagent;
document.querySelector("#prompt").onclick = prompttest;

}

function changelocation() {
    location = "https://www.google.com/";
}

function changebackground(){   
    
    document.body.style.backgroundColor = document.querySelector("#backgroundcolor").value;


}

function obtaindimensions(){


    let str = ("[" + innerWidth + "," + innerHeight +"]" );

    document.querySelector("#dimensions").value = str;    

}

function gettime(){
    const d = new Date();

    let time = d.toTimeString();
    
    window.alert("time is: " + time); 

}
function getagent(){
    this.innerHTML = navigator.userAgent;
}

function prompttest(){

    // var userprompt = window.prompt("Current Value" + innerHTML + "Enter a new number");
  
    var string = "Current Value" + userprompt + "Enter a new number";
    var userprompt = window.prompt(string, "5");


    // var userprompt = window.prompt("Current Value" + innerHTML + "Enter a new number");

    // if (isNaN(userpompt)){
    //     console.log(innerHTML + "is Null or NaN")
    // }
    // else
    // document.querySelector("#prompt").innerHTML = userprompt;


}


