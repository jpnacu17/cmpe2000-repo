



onload = ()=> {
document.querySelector("#makeid").onchange = UpdateMake;
document.querySelector("#test").onclick = UpdateModel;
//document.querySelectorAll(".modelclass").onclick = UpdateModel;
document.querySelectorAll(".modelclass").forEach((element)=>{
    element.onclick = UpdateModel
})

}