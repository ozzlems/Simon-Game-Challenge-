var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red" , "blue" , "green" , "yellow"];
var randomChosenColour;
var started = false;
var level = 0;


function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour= buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}


$(".btn").click(function(){
var userChosenColour = $(this).attr("id");

userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}

function animatePress(currentColour){
   $("#" + currentColour).addClass("pressed");
   setTimeout(function(){
    $("#" + currentColour).removeClass("pressed"); } , 150);
   }

   $(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level );
        nextSequence();
        started = true;
    }}
   );
    