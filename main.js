const stats = document.querySelector("#stats");
const stat = document.querySelector("#stat");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");


const controls = document.querySelector("#controls");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const monsterStats = document.querySelector("#monsterStats");
const text = document.querySelector("#text");

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


function goStore(){
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store."

    
}

function goCave(){
    console.log("Going to cave");
    
}

function fightDragon(){
    console.log("Fight the Dragon");
    
}
function buyHealth(){

}
function buyWeapon(){
    
}function goTown(){
    
}