// alert('Working');

var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];

$('.btn').click(function () {
  // console.log('Button Clicked');
  var userChosenColour = $(this).attr('id');
  // console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  playSound(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  // We check the "name" that was passed into the function
  // console.log('Playing sound for: ' + name);
  switch (name) {
    case 'red':
      var redAudio = new Audio('sounds/red.mp3');
      redAudio.play();
      break;

    case 'blue':
      var blueAudio = new Audio('sounds/blue.mp3');
      blueAudio.play();
      break;

    case 'green':
      var greenAudio = new Audio('sounds/green.mp3');
      greenAudio.play();
      break;

    case 'yellow':
      var yellowAudio = new Audio('sounds/yellow.mp3');
      yellowAudio.play();
      break;

    default:
      console.log('No sound found for: ' + name);
      break;
  }
}

nextSequence();
