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
onload = ()=> {

    layout();
    addPlayers();
    playerpiece();
    //document.querySelector("#RollDice").onclick = diceroll;
    //document.querySelector("#RollDice").onclick = movePlayer;
    document.querySelector("#RollDice").onclick = PlayerTurn;

}

function layout(){

    //suite order
        let suitelist = document.querySelectorAll("section");

    for(let i=0; i<suitelist.length; i++){
        let posn = suitelist[i].getAttribute("suite"); //gets the suite value and puts it on variable posn
        let row = parseInt(posn.substring(0,2)); //substring index 0 to 2 (first 2 characters)
        let col = parseInt(posn.substring(2,4));

        //set property grid row and col
        suitelist[i].style.setProperty("grid-row", `${row}/${row+1}`); 
        suitelist[i].style.setProperty("grid-column", `${col}/${col+1}`);
    }
    
    //color layout
    let lb = document.querySelectorAll(".lightblue");
    let b = document.querySelectorAll(".brown");
    let p = document.querySelectorAll(".purple");
    let o = document.querySelectorAll(".orange");
    let r = document.querySelectorAll(".red");
    let y = document.querySelectorAll(".yellow");
    let g = document.querySelectorAll(".green");
    let bl = document.querySelectorAll(".blue");
    //console.log(lb);
    
    for(let i=0; i<=2; i++)
    {
    lb[i].setAttribute("class", "reg lightblue top");   //3
    //b[i].setAttribute("class", "reg brown top");        //2
    p[i].setAttribute("class", "reg purple right");     //3
    o[i].setAttribute("class", "reg orange right");     //3
    r[i].setAttribute("class", "reg red bottom");       //3
    y[i].setAttribute("class", "reg yellow bottom");    //3
    g[i].setAttribute("class", "reg green left");       //3
    //bl[i].setAttribute("class", "reg blue left");       //2
    }

    for(let i=0; i<=1; i++)
    {

    b[i].setAttribute("class", "reg brown top");        //2
    bl[i].setAttribute("class", "reg blue left");       //2
    }


}

    
function diceroll(){
    //randomize dice
    let rand1 = Math.floor((Math.random() * 6) + 1); //dice range from 1 to 6
    let rand2 = Math.floor((Math.random() * 6) + 1);
    let die = document.querySelectorAll(".die");
    

    //test
    //alert("rand number is "+ rand);
    // console.log(die);
    // console.log(rand1);
    // console.log(rand2);

    //for dice 1
    switch(rand1){ // each case represent the dice value
        case 1:
            die[0].src ="./images/dice1.jpg";
            //die[1].src ="./images/dice1.jpg";

        break;

        case 2:
            die[0].src ="./images/dice2.jpg";
            //die[1].src ="./images/dice2.jpg";

        break;

        case 3:
            die[0].src ="./images/dice3.jpg";
            //die[1].src ="./images/dice3.jpg";


        break;

        case 4:
            die[0].src ="./images/dice4.jpg";
            //die[1].src ="./images/dice4.jpg";

        break;

        case 5:
            die[0].src ="./images/dice5.jpg";
            //die[1].src ="./images/dice5.jpg";

        break;

        case 6:
            die[0].src ="./images/dice6.jpg";
            //die[1].src =".

        break;
    }

    //for dice 2
    switch(rand2){ // each case represent the dice value
        case 1:
            //die[0].src ="./images/dice1.jpg";
            die[1].src ="./images/dice1.jpg";

        break;

        case 2:
            //die[0].src ="./images/dice2.jpg";
            die[1].src ="./images/dice2.jpg";

        break;

        case 3:
            //die[0].src ="./images/dice3.jpg";
            die[1].src ="./images/dice3.jpg";


        break;

        case 4:
            //die[0].src ="./images/dice4.jpg";
            die[1].src ="./images/dice4.jpg";

        break;

        case 5:
            //die[0].src ="./images/dice5.jpg";
            die[1].src ="./images/dice5.jpg";

        break;

        case 6:
            //die[0].src ="./images/dice6.jpg";
            die[1].src ="./images/dice6.jpg";

        break;

        
        
    }

    let dice = rand1 + rand2;
    //console.log(dice);
    
    return rand1 + rand2;
    //test

}

function addPlayers(){
    let parentElem1 = document.querySelector("#player1");
    let newElem1 = document.createElement("img");
    newElem1.setAttribute("src","./images/hat.jpg");
    newElem1.setAttribute("id", "p1");
    parentElem1.append(newElem1);

    let parentElem2 = document.querySelector("#player2");
    let newElem2 = document.createElement("img");
    newElem2.setAttribute("src","./images/shoe.jpg");
    newElem2.setAttribute("id", "p2");
    parentElem2.append(newElem2);
}


function playerpiece(){
    // put pieces on the "GO" tile
    //let parentElem1 = document.querySelector("#gameboard");

    let section = document.querySelectorAll("section");

  
    let node = section[0].getAttribute('id');    
 
    let parentElem1 = document.querySelector(`#${node}`);
    let parentElem2 = document.querySelector(`#${node}`);
        //test        
        console.log(section);            
        console.log(parentElem1);
        console.log(node);
    let newElem1 = document.createElement("img");
    newElem1.setAttribute("src","./images/hat.jpg");
    newElem1.setAttribute("id", "P1piece");    
    parentElem1.append(newElem1);        
    let newElem2 = document.createElement("img");
    newElem2.setAttribute("src","./images/shoe.jpg");
    newElem2.setAttribute("id", "P2piece");    
    parentElem2.append(newElem2); 
    
    

}

let i = 0;
let time = 0;
function movePlayer1(){

    let dice = diceroll();
    //console.log(dice);
    
    i = i + dice;  
    
    let section = document.querySelectorAll("section");


time = setTimeout(() => {
for(j=0; j<i; j++)
    {  
        let p1 = document.getElementById("P1piece");
        p1.remove();//removes the piece to be moved
        
        let node = section[j].getAttribute('id');
        //console.log(j);    
    
        let parentElem1 = document.querySelector(`#${node}`);
            //test        
            // console.log(section);            
            // console.log(parentElem1);
            // console.log(node);
            
        let newElem1 = document.createElement("img");
        newElem1.setAttribute("src","./images/hat.jpg");
        newElem1.setAttribute("id", "P1piece");    
        parentElem1.append(newElem1);
    }  
            
}, 500);

       
}

function movePlayer2(){


    let dice = diceroll();
    console.log(dice);
    
    i = i + dice;  
    
    let section = document.querySelectorAll("section");

time = setTimeout(() => {
for(j=0; j<i; j++)
    {  
        let p2 = document.getElementById("P2piece");
        p2.remove();//removes the piece to be moved
        
        let node = section[j].getAttribute('id');
        //console.log(j);    
    
        let parentElem2 = document.querySelector(`#${node}`);
            //test        
            // console.log(section);            
            // console.log(parentElem1);
            // console.log(node);
            
        let newElem2 = document.createElement("img");
        newElem2.setAttribute("src","./images/shoe.jpg");
        newElem2.setAttribute("id", "P2piece");    
        parentElem2.append(newElem2);
    }  
            
}, 500);


        
       
}

let count = 0;
function PlayerTurn(){
    let player1 = document.querySelector("#p1")
    let player2 = document.querySelector("#p2")
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



