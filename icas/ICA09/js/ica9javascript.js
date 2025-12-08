let picArray = [];

$(document).ready(() => {

    loadingpics();

    $("#right").click(picRight);
    $("#left").click(picLeft);
    $("#play").click(picPlay);

    // $(".timing").change(play);



})




//functions
function loadingpics()
{
    for(i=1; i<=3; i++){
        //let index = i+1;
        //console.log("index"+i)
        var picname= "images/pic" + i +".jpg";
        //var myPic = new Image();
        //myPic.src = picname;
        // picArray.push(myPic);
        //picArray.push(picname);
        picArray[i] = picname;
        console.log("array"+ picArray);
    }
}

let count = 1;
function picRight()
{
   
    $("#display").fadeOut();
    if(count < picArray.length-1){

    ++count;
    //console.log("before"+count);

    let pic = $("#display").attr("src", `${picArray[count]}`);

    //$("#display").fadeIn(pic)
    
    $("#display").fadeIn();

    //var picname= "images/pic" + count +".jpg";

    //$("#display").attr("src", `${picname}`);
    //console.log("size" + `${picArray.length}`);
    //console.log("log" + `${picArray[count]}`);
    
    //console.log(count);
    }     

    else{
        count = 1;
        $("#display").fadeOut();
        let pic = $("#display").attr("src", `${picArray[count]}`);
        $("#display").fadeIn();
    }
     
}

function picLeft()
{

    --count;

    if(count < picArray.length-1 && count > 0){
    
    //console.log("before"+count);

    let pic = $("#display").attr("src", `${picArray[count]}`);

    //var picname= "images/pic" + count +".jpg";

    //$("#display").attr("src", `${picname}`);
    //console.log("size" + `${picArray.length}`);
    //console.log("log" + `${picArray[count]}`);
    
    //console.log(count);
    }     

    else{
        count = 3;
        let pic = $("#display").attr("src", `${picArray[count]}`);
    }

}
// function play(){
//     let timing = $(".timing:checked").val;
//     console.log("timing is: "+ timing);

//     return timing;

// }

let timer = 0;
function picPlay(){

    let value = $(".timing:checked").val();
    // time = play();

    timer = setInterval(picRight, value);
    console.log("value is" + value);
}

