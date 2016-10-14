// We will have a main Player. 
// 3 different enemies
// Enimes = multipul choice question, Essay Question, Time
// battle. . . Weapon = Pencil
// stats
//itmes
//story prompts and alerts

var userName = prompt("What is your name player? ");
// username choice
switch (userName){
    case "Spencer":
    alert("what a great name!");
    break;

    case "Anthony":
    alert("Whats up " + userName + " ready to play the game?");
    break;

    default: 
    alert(userName + " Hmmm, Interesting name.");
    break;
}
console.log(userName);
//player and attack functions
var Player = {
    health: 100,
    attack1: function attack (num){
    return "health left " + (this.health - 10);
    },
    attack2: function attack (num){
        return "health left " + (this.health - 20);
    },
    attack3: function attack (num){
        return "health left " + (this.health - 30);

    },
};
//skip function
var Skip = {
    Bladder: 0,
    Skip1: function skip (num){
        return "Bladder Level " + (this.Bladder + 10);
    },
     Skip2: function skip (num){
        return "Bladder Level " + (this.Bladder + 20);
     },
     Skip3: function skip (num){
        return "Bladder Level " + (this.Bladder + 30);
     }
}
var startButton = document.getElementById('start');
var startGame = function startTheGame (){
    console.log("Health = " + Player.health);


function random(range){
    return Math.round(Math.random() * range);
};
//weapons
var weaponList = ["Pen ", "Pencil ", "Crayon ", "Marker ", "Lip Stick "];
// beginning
alert("The bell has rung, Your test has now started" + "you have 60 minutes to finish this test!");
var Wait = prompt("You immediatly procrastinate and day dream. What do you dream about?");
alert("10 minutes have passed because you day dreamed about " + Wait + ", and you havent even started!");
// first attack on enemy that has just appeared.
var weapon = weaponList [ random( weaponList.length - 1) ];
alert("You hurry and grab a " + weapon + " out of your bag." + " I guess this will do!");
var attack = prompt("A Multipule choice quesion has appeared" + " Do you attack or skip?");
if (attack === "attack"){
    alert ("You just destroyed that question!!" + " that took some energy! ");
    console.log(Player.attack1());

} else if (attack === "skip"){
    alert ("You Skipped the first question? good luck on passing!!" + " Because you skipped you have to pee slightly.");
    console.log(Skip.Skip1());
}
// second enemy
var attack2 = prompt("The second question has appeared! It is an essay question! You hate essay questions, do you attack or skip?");
if (attack2 === "attack"){
    alert ("You just destroyed that essay question!!" + " that took alot of energy! " + " Good job you were able to do it quickly!!");
console.log(Player.attack2());
} else if (attack2 === "skip"){
    alert ("You Skipped the second question? Whats the point in you even taking this test?!" + " Because you skipped you have to pee a little more.");
    console.log(Skip.Skip2());
}
//third enemy
var attack3 = prompt("This is the final enemy, your arch rival TIME!! dun dun dun!" + "to do you attack or skip?!" );
if (attack3 === "attack"){
    alert("Way to knock it out of the park! You passed the test!!");
console.log(Player.attack3());
console.log("WINNER");
} else if (attack3 === "skip"){
    alert("Who do you think you are if you think you can skip time?!" + "not only did you lose, I bet you have to pee a little bit huh?");
    console.log(Skip.Skip3());
    console.log("LOSER");

}
}

startButton.addEventListener('click',startGame);

