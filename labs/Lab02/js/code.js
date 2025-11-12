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
document.querySelector("#RollDice").onclick = diceroll;

}


    
function diceroll(){
    //randomize dice
    let rand = Math.floor((Math.random() * 6) + 1); //dice range from 1 to 6
    let die = document.querySelector(".die");

    //test
    alert("rand number is "+ rand);
    
    

    switch(rand){ // each case represent the dice value
        case 1:
            die.src ="./images/dice1.jpg";

        break;

        case 2:
            die.src ="./images/dice2.jpg";

        break;

        case 3:
            die.src ="./images/dice3.jpg";

        break;

        case 4:
            die.src ="./images/dice4.jpg";

        break;

        case 5:
            die.src ="./images/dice5.jpg";

        break;

        case 6:
            die.src ="./images/dice6.jpg";

        break;
    }



    //document.querySelector("#die1").img
    
}