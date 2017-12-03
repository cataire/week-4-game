
var randomPick = Math.floor(Math.random()*12+1);
console.log(randomPick);

var firstButton = {

value: 0,
getValue: function() {

btnValue = $(".one").attr("value", randomPick);
console.log(btnValue);
},


};

firstButton.btnValue;

$(".crystal-buttons").click(function() {

var getValue = $(this).attr("value");
console.log(getValue);

});