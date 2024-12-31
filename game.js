var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  var lastindex = userClickedPattern.length - 1;
  checkAnswer(lastindex);
});

function checkAnswer(currentLevel) {
  //check that the userclicked patter matches the gamepattern
  // if it does empty the userclickpattern if its wrong turn started to false.

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Gamge over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  //get random number between 0 and 3
  var randomnumber = Math.floor(Math.random() * 4);

  //get random color from buttonColours array using randomnumber
  var randomChosenColour = buttonColours[randomnumber];

  //add random color to gamePattern array
  gamePattern.push(randomChosenColour);

  //select the button with the same id as the randomChosenColour
  var colorid = $("#" + randomChosenColour);

  //animate the button with the same id as the randomChosenColour
  colorid.fadeOut(100).fadeIn(100);

  //play the sound for the randomChosenColour
  playSound(randomChosenColour);
}

function playSound(name) {
  //play sound for the randomChosenColour
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  var animation = $("#" + currentColour);
  animation.addClass("pressed");
  setTimeout(function () {
    animation.removeClass("pressed");
  }, 200);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
