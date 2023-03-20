var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red" , "blue" , "green" , "yellow"];
var randomChosenColour;
var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level );
        nextSequence();
        started = true; }}
   );


function nextSequence(){
    userClickedPattern = [];
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
checkAnswer(userClickedPattern.length-1);
});


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}


function animatePress(currentColour){
   $("#" + currentColour).addClass("pressed");
   setTimeout(function(){
    $("#" + currentColour).removeClass("pressed"); } , 120);
   }

  
  
  
   function checkAnswer(currentLevel){
   
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("success");

      if(userClickedPattern.length === gamePattern.length){
        setTimeout(function() { nextSequence();}, 1100);
            
    }
      }
      else{
        var audio2 = new Audio("sounds/wrong" + ".mp3" );
        audio2.play();

        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");},200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        }
      }
    




           
        
       
 
    