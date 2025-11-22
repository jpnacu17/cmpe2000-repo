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

//windows onload
onload = ()=> {

    layout();
    addPlayers();
    playerpiece();
    document.querySelector("#RollDice").onclick = diceroll;

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
    console.log(die);
    console.log(rand1);
    console.log(rand2);

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
    let posn = section[i].getAttribute("suite");
    //double check
    let parentElem1 = document.querySelector("section[suite=1111]");
    //test
    console.log(parentElem1);
    let newElem1 = document.createElement("img");
    newElem1.setAttribute("src","./images/hat.jpg");
    newElem1.setAttribute("id", "P1piece");
    parentElem1.append(newElem1);

    
    let P1 = document.querySelector("P1piece");

    //grid positioning of the piece
    let row = parseInt(11); 
    let col = parseInt(11);
    //set property grid row and col
    P1.style.setProperty("grid-row", `${row}/${row}`); 
    P1.style.setProperty("grid-column", `${col}/${col}`);

}
