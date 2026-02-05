// alert('Working');

var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
var canClick = true;

$(document).keypress(function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});

$('.btn').click(function () {
  if (started && canClick) {
    // console.log('Button Clicked');w
    var userChosenColour = $(this).attr('id');
    // console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  userClickedPattern = [];

  $('#' + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
  level++;
  $('#level-title').text('Level' + ' ' + level);
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

    case 'wrong':
      var wrongAudio = new Audio('sounds/wrong.mp3');
      wrongAudio.play();
      break;

    default:
      console.log('No sound found for: ' + name);
      break;
  }
}

function animatePress(currentColour) {
  // console.log(currentColour);

  $('#' + currentColour).addClass('pressed');

  setTimeout(function () {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}

function checkAnswer(currentLevel) {
  // console.log(gamePattern);
  // console.log(userClickedPattern);
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    canClick = false;
    // console.log('success');

    if (userClickedPattern.length === gamePattern.length) {
      // 3. Call nextSequence() after a 1000ms delay
      setTimeout(function () {
        nextSequence();
        canClick = true;
      }, 1000);
    } else {
      canClick = true;
    }
  } else {
    // console.log('failure');
    playSound('wrong');
    $('h1').text('Game Over, Press Any Key to Restart');
    $('body').addClass('game-over');
    setTimeout(function () {
      $('body').removeClass('game-over');
    }, 200);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}
