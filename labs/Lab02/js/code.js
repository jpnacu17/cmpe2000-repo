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
 
suiteorder();
layout();
document.querySelector("#RollDice").onclick = diceroll;

}

function suiteorder(){
    let suitelist = document.querySelectorAll("section");

    for(let i=0; i<suitelist.length; i++){
        let posn = suitelist[i].getAttribute("suite"); //gets the suite value and puts it on variable posn
        let row = parseInt(posn.substring(0,2)); //substring index 0 to 2 (first 2 characters)
        let col = parseInt(posn.substring(2,4));

        //set property grid row and col
        suitelist[i].style.setProperty("grid-row", `${row}/${row+1}`); 
        suitelist[i].style.setProperty("grid-column", `${col}/${col+1}`);
    }
}

function layout(){
    let l= document.querySelectorAll(".brown");

    console.log(l)
    


}

    
function diceroll(){
    //randomize dice
    let rand1 = Math.floor((Math.random() * 6) + 1); //dice range from 1 to 6
    let rand2 = Math.floor((Math.random() * 6) + 1);
    let die = document.querySelectorAll(".die");
    

    //test
    //alert("rand number is "+ rand);
    console.log(die);

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
            //die[1].src ="./images/dice6.jpg";

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