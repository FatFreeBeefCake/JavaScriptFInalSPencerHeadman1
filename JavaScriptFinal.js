// We will have a main Player. 
// 3 different enemies
// Enimes = multipul choice question, Essay Question, Time
// battle. . . Weapon = Pencil
// stats
//itmes
//story prompts and alerts
function attack3(){
console.log("Health = " + (Player.health - 15));
console.log("Bladder = " + (Player.bladder + 15));
console.log("Time Limit " + (Time.Limit - 15));

}

var Player = {
    health: 100,
    bladder: 10,

};
var Time = {

    Limit: 60,
}

var username = prompt("Enter name please");
console.log(username);

var startButton = document.getElementById('start');
var startGame = function startTheGame (){
    console.log("Health = " + Player.health);
    console.log("Bladder = " + Player.bladder);
    console.log("Time left = " + Time.Limit);


function random(range){
    return Math.round(Math.random() * range);
};

var weaponList = ["Pen ", "Pencil, ", "Crayon"];
// pencil
alert("The bell has rung, Your test has now started" + "you have " + Time.Limit + " minutes to finish this test!");
var Wait = prompt("You immediatly procrastinate and day dream. What do you dream about?");
alert("10 minutes have passed because you day dreamed about " + Wait + ", and you havent even started!");
console.log("Time Limit = " + (Time.Limit - 10));
// first attack on enemy that has just appeared.
var weapon = weaponList [ random( weaponList.length - 1) ];
alert("You hurry and grab a " + weapon + " out of your bag." + " I guess this will do!");
var attack = prompt("A Multipul choice quesion has appeared" + " Do you attack or skip?");
if (attack === "attack"){
    alert ("You just destroyed that question!!" + " that took some energy! ");
console.log("Health = " + (Player.health - 5));
console.log("Bladder = " + (Player.bladder + 5));
console.log("Time Limit = " + (Time.Limit - 15));
} else if (attack === "skip"){
    alert ("You Skipped the first question? good luck on passing!!" + " Even though you skipped some health was still drained.");
console.log("Health = " + (Player.health - 5));
console.log("Bladder = " + (Player.bladder + 5));
console.log("Time Limit " + (Time.Limit - 15));
}
var attack2 = prompt("The second question has appeared! It is an essay question! You hate essay questions, do you attack or skip?");
if (attack2 === "attack"){
    alert ("You just destroyed that essay question!!" + " that took alot of energy! " + " Good job you were able to do it quickly!!");
console.log("Health = " + (Player.health - 10));
console.log("Bladder = " + (Player.bladder + 10));
console.log("Time Limit " + (Time.Limit - 20));
} else if (attack2 === "skip"){
    alert ("You Skipped the second question? Whats the point in you even taking this test?!" + " Even though you skipped some health was still drained.");
console.log("Health = " + (Player.health - 10));
console.log("Bladder = " + (Player.bladder + 10));
console.log("Time Limit " + (Time.Limit - 20));
var attack3 = prompt("This is the final enemy, your arch rival TIME!! dun dun dun!" + "to do you attack or skip?!" );
if (attack3 === "attack"){
    alert("Way to knock it out of the park! You passed the test!!");
console.log("Health = " + (Player.health - 10));
console.log("Bladder = " + (Player.bladder + 10));
console.log("Time Limit " + (Time.Limit - 20));
}
}
}
startButton.addEventListener('click',startGame);

