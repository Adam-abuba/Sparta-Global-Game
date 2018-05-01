window.onload = function () { //When the page loads the games will be hidden in their divs with display property = none until their respective button is turned on
  $(".FullGame").css("display", "none");
  };
var Score = 0;
var Icon = 0;
$("#SortGameRefresh").on("click",function () {
      window.location.reload(true);
});

$(".StartGame").click(Gamestart).click(TimeUp).click(IconChange);

function TimeUp() { // This is the timer for each game in which the user plays
  setTimeout(function() {
    if (Score >= 10) {
     alert("Your 30 seconds are up!" + " You Scored " + Score + " points! You pass!!")
    } else {
     alert("Your 30 seconds are up! You have only scored " + Score + " points. You fail");
    };

    window.location.reload(true);
    Score = 0;

  }, 30000);
}

function IconChange() {
  Icon = Math.floor(Math.random() * 2);
  $(".ObjectCard").html(
    function () {
  if (Icon == 1) {
    return "O";
  }
  else if (Icon == 0){
    return "X";
  }
});
}

function Gamestart() {
  $(".Instructions").css("display",'none')
  $(".FullGame").css("display", "inline");
        $(".ObjectCard").html( // Determines what is to show up on the Icon card
          function () {
            $(document).keydown(function() {
                switch (window.event.keyCode) {
                    case 37:
                      if(Icon == 1) {
                        Score+=1;
                        $(".Ticks").remove();
                        $(".ScoreBox").html(Score)
                        console.log('Player Scored a point');
                        $(".LeftSortingBin").html("<i class='far fa-check-circle Ticks'></i>");
                        IconChange();
                      }
                      else {
                        Score-=1;
                        $(".Cross").remove();
                        $(".ScoreBox").html(Score)
                        $('.LeftSortingBin').html('<i class="far fa-times-circle Cross"></i>')
                        console.log('Incorrect answer from the player');
                        IconChange();
                      }
                      break;
                    case 39:
                    if(Icon == 0) {
                      Score+=1;
                      $(".Ticks").remove();
                      $(".ScoreBox").html(Score)
                      $(".RightSortingBin").html("<i class='far fa-check-circle Ticks'></i>");
                      console.log('Player Scored a point');
                      IconChange();
                    }
                    else {
                      Score-=1;
                      $(".Cross").remove();
                      $(".ScoreBox").html(Score)
                      $('.RightSortingBin').html('<i class="far fa-times-circle Cross"></i>')
                      console.log('Incorrect answer from the player');
                      IconChange();
                    }
                    break;
                }
            });
        });
        }
