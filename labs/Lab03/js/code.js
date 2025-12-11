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

// const i = 0; //position of piece
//windows onload
    // onload = ()=> {
    //     layout();
    //     addPlayers();
    //     playerpiece();
    //     //$("#RollDice").onclick = PlayerTurn;
    //     //for test
    //     //$("#RollDice").onclick = test;
    // }
$(document).ready(()=>{
    layout();
    addPlayers();
    playerpiece();

    $("#RollDice").click(diceroll);

})


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

    
function diceroll(){    
   
    //randomize dice
    let rand1 = Math.floor((Math.random() * 6) + 1); //dice range from 1 to 6
    let rand2 = Math.floor((Math.random() * 6) + 1);
    //let die = $All(".die");
    let die = $(".die");
    console.log(die);
    

    //test
    //alert("rand number is "+ rand);
    // console.log(die);
    // console.log(rand1);
    // console.log(rand2);

    //for dice 1
    switch(rand1){ // each case represent the dice value
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
    switch(rand2){ // each case represent the dice value
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

    let dice = rand1 + rand2;
    console.log(dice);
    
    return rand1 + rand2;
    //test

}


function addPlayers(){
        // let parentElem1 = $("#player1");
        // let newElem1 = document.createElement("img");
        // newElem1.attr("src","./images/hat.jpg");
        // newElem1.attr("id", "p1");
        // parentElem1.append(newElem1);

        // let parentElem2 = $("#player2");
        // let newElem2 = document.createElement("img");
        // newElem2.attr("src","./images/shoe.jpg");
        // newElem2.attr("id", "p2");
        // parentElem2.append(newElem2);


     $("#player1").html(`<img id="p1" src="./images/hat.jpg">`); 
     $("#player2").html(`<img id="p2" src="./images/shoe.jpg">`); 



}


function playerpiece(){
    // put pieces on the "GO" tile
    

    let section = $("section");  
    let start = $(section[0]).attr("id");  
    $("#" + start).append(`<img id="p1Piece" src="./images/hat.jpg">`); 
    $("#" + start).append(`<img id="p2Piece" src="./images/shoe.jpg">`); 

    // let parentElem1 = $(`#${node}`);
    // let parentElem2 = $(`#${node}`);
    //test        
    // console.log(section);            
    // console.log(parentElem1);
    // console.log(node);
    // let newElem1 = document.createElement("img");
    // newElem1.attr("src","./images/hat.jpg");
    // newElem1.attr("id", "P1piece");    
    // parentElem1.append(newElem1);        
    // let newElem2 = document.createElement("img");
    // newElem2.attr("src","./images/shoe.jpg");
    // newElem2.attr("id", "P2piece");    
    // parentElem2.append(newElem2); 

    //console.log("#" + start);
    

}


    let time = 0;
    let i1 = 1;
    let i2 = 1;
function movePlayer1(){

    let dice = diceroll();
    //console.log(dice);
    
    i1 = (i1 + dice);    
    let section = $("section");

time = setTimeout(() => {
for(j=0; j<i1; j++)
    {  

        $("#p1Piece").remove(); //removes piece

        let section = $("section");  
        let move = $(section[j]).attr("id");  
        $("#" + move).append(`<img id="p1Piece" src="./images/hat.jpg">`); 
        $("#" + move).append(`<img id="p2Piece" src="./images/shoe.jpg">`); 

        // let p1 = document.getElementById("P1piece");
        // p1.remove();//removes the piece to be moved        
        // let node = section[j].getAttribute('id');
        // //console.log(j);        
        // let parentElem1 = $(`#${node}`);           
        // let newElem1 = document.createElement("img");
        // newElem1.attr("src","./images/hat.jpg");
        // newElem1.attr("id", "P1piece");    
        // parentElem1.append(newElem1);

        


        rules(parentElem1); //call method
    }              
}, 500);
    
}
/*
function movePlayer2(){


    let dice = diceroll();
    console.log(dice);
    
    i2 = (i2 + dice);  
    
    let section = $("section");

time = setTimeout(() => {
for(j=0; j<i2; j++)
    {  
        let p2 = document.getElementById("P2piece");
        p2.remove();//removes the piece to be moved
        
        let node = section[j].getAttribute('id');
        //console.log(j);    
    
        let parentElem2 = $(`#${node}`);
            //test        
            // console.log(section);            
            // console.log(parentElem1);
            // console.log(node);
            
        let newElem2 = document.createElement("img");
        newElem2.attr("src","./images/shoe.jpg");
        newElem2.attr("id", "P2piece");    
        parentElem2.append(newElem2);
    }  
            
}, 500);        
       
}

    let count = 0;

function PlayerTurn(){
    let player1 = $("#p1")
    let player2 = $("#p2")
    if(count % 2 == 0){
        movePlayer1();
        player2.style.setProperty("border","red dashed 2px");
        player1.style.setProperty("border","");
    }
    else{
        movePlayer2();
        player1.style.setProperty("border","red dashed 2px");
        player2.style.setProperty("border","");
        
    }
    ++count;
    console.log(count);

}


function rules(parentElem){//probably move up?
       
    let tile = parentElem.getAttribute("class");
    //test
    // console.log(`tile is ${parentElem}`);
    // console.log(`tile is ${tileSection}`);
    console.log(`class is ${tile}`);
    switch(`.${tile}`){
        case ".corner go":
        console.log("case go");
        break;
        case ".reg tax":
        console.log("case tax");
        break;

    }

}

function test(){

    
    
    i1 = 5;    
    let section = $("section");

time = setTimeout(() => {
for(j=0; j<i1; j++)
    {  
        let p1 = document.getElementById("P1piece");
        p1.remove();//removes the piece to be moved        
        let node = section[j].getAttribute('id');
        //console.log(j);        
        let parentElem1 = $(`#${node}`);
            //test        
            // console.log(section);            
            // console.log(parentElem1);
            // console.log(node);            
        let newElem1 = document.createElement("img");
        newElem1.attr("src","./images/hat.jpg");
        newElem1.attr("id", "P1piece");    
        parentElem1.append(newElem1);

        rules(parentElem1); //call method
    }              
}, 500);


}

*/

