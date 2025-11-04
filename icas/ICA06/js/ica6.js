
window.onload = () => {
document.querySelector("#colorbutton").onclick = changebackground;
document.querySelector("#currentdimension").onclick = obtaindimensions;

}

function changelocation() {
    location = "https://www.google.com/";
}

function changebackground(){   
    
    document.body.style.backgroundColor = document.querySelector("#backgroundcolor").value;

    //document.querySelector(body).style.backgroundColor = document.querySelector("#backgroundcolor").value;

    // document.body.style.background = document.querySelector("#backgroundcolor").value;
}

function obtaindimensions(){


    var str = ("width is" ,innerWidth) 
document.querySelector("#dimensions").textContent = str


//console.log("width is", innerWidth);

}

