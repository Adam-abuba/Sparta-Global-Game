window.onload = function () { //When the page loads the games will be hidden in their divs with display property = none until their respective button is turned on
  $(".FullGame").css("display", "none");
}
var Score = 0;
var Icon = 0;
var myCorrectSound = new Audio("Audio/Correct.mp3");
var myIncorrectSound = new Audio("Audio/Incorrect.mp3");


$(".StartGame").click(Gamestart).click(timeUp).click(IconChange);
$(".playAgain").click(playAgain);


function timeUp() { // This is the timer for each game in which the user plays
    var time = 30;
    var countdown = setInterval(function(){ $(".time").html(time); // This section displays the countdown on screen by running an interval every second and re-displaying the value of time
          time--;
        }, 1000);


  setTimeout(function() { // This section is what actual controls the time before the game over screen appears and informs the player of whether the have won or failed
    clearInterval(countdown);
    $(".gameOver").css("display", "inline")
    $(".endText").html(function () {
      if (Score >= 15) {
       return "Times up!" + " You scored " + Score + " points! You pass!!"
      } else {
       return "Times up! You scored " + Score + " points. You fail.";
      };

    })
    Score = 0;
  }, 31000); // Delay between setInterval and setTimeout means an extra second must be added to setTimeout to allow the countdown display to be in sync.
}


function playAgain() { //This function reloads the page when the "Play Again" button is clicked
 window.location.reload(true);
}


function IconChange() { // The function gives a random number between 0 and 1.99 then always rounds down to either give 0 or 1 which in turn selects the icon to be sorted.
  Icon = Math.floor(Math.random() * 2);
  $(".ObjectCard").html(
    function () {
  if (Icon == 1) {
    return '<img src="images/Circle.gif" alt="Rotating ring gif" class = "Ring">';
  }
  else if (Icon == 0){
    return '<img src="images/Pyramid.gif" alt="Rotating pyramid gif" class = "Ring">';
  }
});
}

function Gamestart() {
  $(".Instructions").css("display",'none') // Hides the instructions
  $(".FullGame").css("display", "inline"); // Reveals game content
        $(".ObjectCard").html( // Determines how the game reacts to what is to shown on the Icon card
          function () {
            $(document).keydown(function() {
                switch (window.event.keyCode) {
                    case 37: // Left arrow key
                      $(".ObjectCard").animate({right: '+=250', top: '+=250'}, "fast", function () { //slides the icon diagonally towards the ring basket which then goes into the if & else statement to determine whether its correct or not.
                        if(Icon == 1) {
                          Score+=1;
                          $(".Ticks").remove();
                          $(".Cross").remove();
                          myCorrectSound.play();
                          $(".ScoreBox").html(Score)
                          $(".LeftSortingBin").html("<i class='far fa-check-circle Ticks'></i>");
                          IconChange();
                        }
                        else {
                          Score-=1;
                          $(".Ticks").remove();
                          $(".Cross").remove();
                          myIncorrectSound.play();
                          $(".ScoreBox").html(Score)
                          $('.LeftSortingBin').html('<i class="far fa-times-circle Cross"></i>')
                          IconChange();
                          }
                      $(this).removeAttr('style');// This resets the postion of the the animated div otherwise the next animation will continue from the current div's postion and fall off the page
                        })
                      break;
                    case 39: //Right arrow key
                      $(".ObjectCard").animate({left: '+=250', top: '+=250'}, "fast", function () {//slides the icon diagonally towards the pyramid basket which then goes into the if & else statement to determine whether its correct or not.
                        if(Icon == 0) {
                          Score+=1;
                          $(".Ticks").remove();
                          $(".Cross").remove();
                          myCorrectSound.play();
                          $(".ScoreBox").html(Score)
                          $(".RightSortingBin").html("<i class='far fa-check-circle Ticks'></i>");
                          IconChange();
                      }
                        else {
                          Score-=1;
                          $(".Cross").remove();
                          $(".Ticks").remove();
                          myIncorrectSound.play();
                          $(".ScoreBox").html(Score)
                          $('.RightSortingBin').html('<i class="far fa-times-circle Cross"></i>')
                          IconChange();
                        }
                      $(this).removeAttr('style'); // This resets the postion of the the animated div otherwise the next animation will continue from the current div's postion and fall off the page
          })
          break;
        }
      });
  });
}
