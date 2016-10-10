// We will have a main Player. 
// 3 different enemies
// Enimes = multipul choice question, Essay Question, Time
// battle. . . Weapon = Pencil
// stats
//itmes
//story prompts and alerts

var Player = prompt("Welcome to the Java Script Midterm Game!"
+ "Now what is your name Player??");
function random(range){
    return Math.round(Math.random() * 100);
};

alert("Welcome " + Player + " can you pass this test?");
function MainPlayer(Player){
    health = 100;
    stamina = 50;
    bladder = 0;
    brain = "dumb";
};
// pencil
function Weapon(){
    led = 100;
    strength = "weak";
};
// MCQ enemy
function enemyOne(){
    power = 25;
    drain = 10;
    time = 5;
};
//EQ enemy
function enemytwo(){
    power = 30;
    drain = 20;
    time = 10;
};

function enemythree(){
    time = 15
    drain = 5
};

alert("The bell has rung, Your test has now started" + "you have 120 minutes to finish this test!");
alert("10 minutes have passed your stamina is draining, You havent even started!" + Player + 
" has 110 minutes to finish the test!");
// first attack on enemy that has just appeared.
var attack = prompt("A Multipul choice quesion has appeared" + "Do you attack or skip?");
if (attack === "attack"){
    alert ("You just destroyed that question!!" + " that took some energy! " + Player + " now has 105 minutes left on the quiz, 40 left in stamina, and suddly slightly has to go pee.");
} else if (attack === "skip"){
    alert ("You Skipped the first question? good luck on passing!!" + "you may have spaced but you didnt lose much energy." + Player + " now has 95 minutes left on the test!, 45 left in stamina." );
}

