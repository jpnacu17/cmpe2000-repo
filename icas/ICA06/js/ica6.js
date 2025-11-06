
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

    var def = 5;
    var string = "Current Value (" + def + ") Enter a new number";
    var userprompt = window.prompt(string, def);

    if (isNaN(userprompt)){
        console.log(userprompt + " is Null or NaN")
    }
    else
    {
    document.querySelector("#prompt").innerHTML = userprompt;
    def = userprompt;
    }

}


