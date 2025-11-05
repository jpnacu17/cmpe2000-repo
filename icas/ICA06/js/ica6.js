
window.onload = () => {
document.querySelector("#colorbutton").onclick = changebackground;
document.querySelector("#currentdimension").onclick = obtaindimensions;
document.querySelector("#time").oncick = gettime;

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
    
    window.alert("time is" + time);

}

