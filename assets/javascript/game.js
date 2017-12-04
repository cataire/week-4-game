
//Variables
var userResult = 0;
var randomNumber;
var valuesIntoInt;
var randomPick;
var wins = 0;
var losses = 0;

function randomValue() {

randomPick = Math.floor(Math.random()*12+1);
console.log(randomPick);
};


function endGame() {
userResult = 0;
screenUpdate();
startGame();
};

function screenUpdate() {
	$(".winsLosses").html("Your wins: " + wins +
							"<br>Your losses: "+ losses);
	$(".userResult").html("Your total score is: " + userResult);
	$(".randomNumber").html("Random number to match: " + randomNumber);

};

function getButtonValues() {

randomValue();
	$(".one").attr("value", randomPick);
randomValue();
	$(".two").attr("value", randomPick);
randomValue();
	$(".three").attr("value", randomPick);
randomValue();
	$(".four").attr("value", randomPick);

};

function startGame() {

getButtonValues();
randomNumber = Math.floor(Math.random()*80)+19;
screenUpdate();

};


$(".crystal-buttons").click(function(){

var getValue = $(this).attr("value");
valuesIntoInt = parseInt(getValue);
console.log(valuesIntoInt);
userResult+=valuesIntoInt;

screenUpdate();


if (userResult === randomNumber) {
	
	wins++;
	screenUpdate();
	alert("You win!");
	endGame();

};

screenUpdate();

if (userResult > randomNumber) {
	
	losses++;
	screenUpdate();
	alert("Too much!");
	endGame();
};

screenUpdate();

});

screenUpdate();
startGame();




