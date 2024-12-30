var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  //get random number between 0 and 3
  var randomnumber = Math.floor(Math.random() * 4);

  //get random color from buttonColours array using randomnumber
  var randomChosenColour = buttonColours[randomnumber];

  //add random color to gamePattern array
  gamePattern.push[randomChosenColour];

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

nextSequence();
