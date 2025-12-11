//Lab3
// array declarations
const takeAChanceText = [
    "Second Place in Beauty Contest: $10",
    "Bank Pays you Dividend of : $50",
    "Repair your Properties. you owe: $250",
    "Speeding Fine: $15",
    "Holiday Fund Matures: Recieve $100",
    "Pay Hospital Fees : $100"
]

const takeAChanceMoney = [
    10,
    50,
    -250,
    -15,
    100,
    -100
]


$(document).ready(()=>{
    //ajax propertyrpices
    //callAjax("https://thor.cnt.sast.ca/~aulakhha/filesAssLab/lab3.php",{"action": "propertyPrices"},"POST", JSON, handleTest, handleTestError);
    //ajax dice roll

    $("#RollDice").click( ()=>{
   callAjax("https://thor.cnt.sast.ca/~aulakhha/filesAssLab/lab3.php",{"action": "diceroll"},"POST", 'json', handleTestDice, handleTestError);
    });

    layout();
    addPlayers();
    playerpiece();
    money();

    //$("#RollDice").click(diceAjax);
    //$("#RollDice").click(PlayerTurn);

})

function callAjax(url, data, type, dataType, successCallback, errorCallback){
    let options = {}

    options['url'] = url;
    options['data'] = data;
    options['type'] = type;
    options['dataType'] = dataType;
    options['success'] = successCallback;
    options['error'] = errorCallback;
    


    $.ajax(options);
}

//functions to handle tests if the ajax call was successful or not
function handleTestError(data) {
    console.log("error:" + data)
}
function handleTest(data) {
    console.log(data)
}
function handleTestDice(data) {
    console.log(data.dice1)
    console.log(data.dice2)

    //call dice roll method?
    //diceroll(data.dice1, data.dice2);
    PlayerTurn(data.dice1, data.dice2);
}



function layout(){

    //suite order
        // let suitelist = $All("section");
        let suitelist = $("section");
        //console.log($(suitelist[1]).attr("id"));
    for(let i=0; i<suitelist.length; i++){
       //gets the suite value and puts it on variable posn
        let posn = $(suitelist[i]).attr("suite");

        let row = parseInt(posn.substring(0,2)); //substring index 0 to 2 (first 2 characters)
        let col = parseInt(posn.substring(2,4));

        //set property grid row and col
        $(suitelist[i]).css("grid-row", `${row}/${row+1}`); 
        $(suitelist[i]).css("grid-column", `${col}/${col+1}`);
    }
    
    //color layout
    let lb = $(".lightblue");
   
    let b = $(".brown");
    let p = $(".purple");
    let o = $(".orange");
    let r = $(".red");
    let y = $(".yellow");
    let g = $(".green");
    let bl = $(".blue");
    //console.log(lb);
    
    for(let i=0; i<=2; i++)
    {
    $(lb[i]).attr("class", "reg lightblue top");   //3
    //b[i].attr("class", "reg brown top");        //2
    $(p[i]).attr("class", "reg purple right");     //3
    $(o[i]).attr("class", "reg orange right");     //3
    $(r[i]).attr("class", "reg red bottom");       //3
    $(y[i]).attr("class", "reg yellow bottom");    //3
    $(g[i]).attr("class", "reg green left");       //3
    //bl[i].attr("class", "reg blue left");       //2
    }

    for(let i=0; i<=1; i++)
    {

    $(b[i]).attr("class", "reg brown top");        //2
    $(bl[i]).attr("class", "reg blue left");       //2
    }


}

    
function diceroll(dice1, dice2){    
   //ajax bit
       //let diceAjax = "result" + callAjax("https://thor.cnt.sast.ca/~aulakhha/filesAssLab/lab3.php",{"action": "diceroll"},"POST", 'json', handleTest, handleTestError);

        //console.log(diceAjax)
    /*
    //randomize dice
    let rand1 = Math.floor((Math.random() * 6) + 1); //dice range from 1 to 6
    let rand2 = Math.floor((Math.random() * 6) + 1);
    */

    let die = $(".die");
    console.log(die);
    

   

    //for dice 1
    switch(dice1){ // each case represent the dice value
        case 1:
            $(die[0]).attr("src", "./images/dice1.jpg");
            //$(die[1]).attr ("src", "./images/dice1..jpg");

        break;

        case 2:
            $(die[0]).attr("src", "./images/dice2.jpg");
            //$(die[1]).attr ("src", "./images/dice2..jpg");

        break;

        case 3:
            $(die[0]).attr ("src", "./images/dice3.jpg");
            //$(die[1]).attr ("src", "./images/dice3.jpg");


        break;

        case 4:
            $(die[0]).attr ("src", "./images/dice4.jpg");
            //$(die[1]).attr ("src", "./images/dice4.jpg");

        break;

        case 5:
            $(die[0]).attr ("src", "./images/dice5.jpg");
            //$(die[1]).attr ("src", "./images/dice5..jpg");

        break;

        case 6:
            $(die[0]).attr ("src", "./images/dice6.jpg");
            //$(die[1]).attr =".

        break;
    }

    //for dice 2
    switch(dice2){ // each case represent the dice value
        case 1:
            //$(die[0]).attr ("src", "./images/dice1..jpg");
            $(die[1]).attr ("src", "./images/dice1.jpg");

        break;

        case 2:
            //$(die[0]).attr ("src", "./images/dice2..jpg");
            $(die[1]).attr ("src", "./images/dice2.jpg");

        break;

        case 3:
            //$(die[0]).attr ("src", "./images/dice3.jpg");
            $(die[1]).attr ("src", "./images/dice3.jpg");


        break;

        case 4:
            //$(die[0]).attr ("src", "./images/dice4.jpg");
            $(die[1]).attr ("src", "./images/dice4.jpg");

        break;

        case 5:
            //$(die[0]).attr ("src", "./images/dice5..jpg");
            $(die[1]).attr ("src", "./images/dice5.jpg");

        break;

        case 6:
            //$(die[0]).attr ("src", "./images/dice6..jpg");
            $(die[1]).attr ("src", "./images/dice6.jpg");

        break;

        
        
    }

    //let dice = rand1 + rand2;
    let dice = dice1 + dice2;
    console.log(dice);
    
    //return rand1 + rand2;
    return dice;
    //test
    
}


function addPlayers(){

$("#player1").html(`<img id="p1" src="./images/hat.jpg">`); 
$("#player2").html(`<img id="p2" src="./images/shoe.jpg">`); 
}


function playerpiece(){
    // put pieces on the "GO" tile
    

    let section = $("section");  
    let start = $(section[0]).attr("id");  
    $("#" + start).append(`<img id="p1Piece" src="./images/hat.jpg">`); 
    $("#" + start).append(`<img id="p2Piece" src="./images/shoe.jpg">`); 

}


    let time = 0;
    let i1 = 1; //check values
    let i2 = 1;
function movePlayer1(dice1, dice2){

    let dice = diceroll(dice1,dice2);
    //let dice = 40;//test
    //console.log("diceroll: " + dice);
    
    i1 = (i1 + dice);    
    //console.log("i1: " + i1);

    let section = $("section");

time = setTimeout(() => {
for(j=1; j<i1; j++)
    {  

        $("#p1Piece").remove(); //removes piece

        //adds the piece based on "j", which corresponds to the tile and the dice rolled
        let section = $("section");  
        let move = $(section[j]).attr("id");  
        $("#" + move).append(`<img id="p1Piece" src="./images/hat.jpg">`); 

        //console.log("j= " + j); 
        //let go = $("#go");

        // if((j %= 40)==0){
        //     alert("looped around");
        //     i1 = 0;
            
        // }

        // if(j == i1-2 || move == "go"){ // if the piece is on a tile based on the number of the dice roll OR
        //                                 // if the piece passes by "go"
        // //console.log("move: " + move);//hopefully reads the current tile
        // rules(move); //call method
        // }
    }              

}, 500);


    
}

function movePlayer2(dice1, dice2){


    let dice = diceroll(dice1, dice2);
    console.log(dice);
    
    i2 = (i2 + dice);  
    
    let section = $("section");

time = setTimeout(() => {
for(j=0; j<i2; j++)
    {  
        $("#p2Piece").remove(); //removes piece

        //adds the piece based on "j", which corresponds to the tile and the dice rolled
        let section = $("section");  
        let move = $(section[j]).attr("id");  
        $("#" + move).append(`<img id="p2Piece" src="./images/shoe.jpg">`); 
    }  
            
}, 500);        
       
}


let count = 0;
function PlayerTurn(dice1, dice2){
    let player1 = $("#p1")
    let player2 = $("#p2")
    if(count % 2 == 0){
        movePlayer1(dice1, dice2);
        player2.css("border","red dashed 2px");
        player1.css("border","");
    }
    else{
        movePlayer2(dice1, dice2);
        player1.css("border","red dashed 2px");
        player2.css("border","");
        
    }
    ++count;
    //console.log(count);

}

let amountP1 = 3000;
let amountP2 = 3000;

function money(){
    // $("#player1amt").attr("val", amountP1);
    // let valuep1 =  $("#player1amt").attr("val");
    //console.log(amountP1);
    $("#player1amt").html("$"+ amountP1);

    // $("#player1amt").attr("val", "3000");
    // let valuep2 =  $("#player1amt").attr("val");
    $("#player2amt").html("$"+ amountP2);
    
}

function rules(move){
    //console.log("move: " + move);
    let tile = $("#" + move).attr("class");
    //let tile = $("#" + move).val();

    let tileVal = $("#" + move).attr("val");
    
    //test
     console.log(`tile is ${tile}`);
    // console.log(`tile is ${tileSection}`);
    console.log(`class is ${tile}`);

    switch(tile){
        case "corner go":
        // alert("case go");
        amountP1 = amountP1 + 200; // add $200 everytime the piece passes or lands on "go"
         $("#player1amt").html("$"+ amountP1); //update money

        alert("amount is " + amountP1);

        break;
        case "reg tax":
        alert("case tax");
        break;

    }

}



