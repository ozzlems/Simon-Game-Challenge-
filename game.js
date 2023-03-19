var gamePattern = [];
var buttonColours = ["red" , "blue" , "green" , "yellow"];
var randomChosenColour;
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
}
randomChosenColour= buttonColours[randomNumber];
gamePattern.push(randomChosenColour);