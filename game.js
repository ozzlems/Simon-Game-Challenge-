var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red" , "blue" , "green" , "yellow"];
var randomChosenColour;
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
}
randomChosenColour= buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("h2").css("color", "red");

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

$(".btn").click(function(){
var userChosenColour = $(this).attr("id");

userClickedPattern.push(userChosenColour);
});
