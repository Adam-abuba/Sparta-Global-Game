window.onload = function () { //When the page loads the games will be hidden in their divs with display property = none until their respective button is turned on
  $(".SortingPage").css("display", "none");
  };
var timer = true;
$("#SortGameSelect").on("click",function () {
  $(".MenuPage").css("display", "none");
  $(".SortingPage").css("display", "inline-block");
  $(".FullGame").css("display", "none");
});
var circleCounter = 0;
var crossCounter = 0;
$(".StartGame").click(Gamestart).click(TimeUp).click(inputKeys);

function TimeUp() { // This is the timer for each game in which the user plays
  setTimeout(function() {
    alert("Your 30 seconds are up!")
  }, 30000);
}

function inputKeys() {

$(document).keydown(function() {
    switch (window.event.keyCode) {
        case 37:
         console.log('Left key is pressed');
         break;
        case 39:
    console.log('Right key is pressed');
         break;
    }
});
}
function Gamestart() {
  $(".Instructions").css("display",'none')
  $(".FullGame").css("display", "inline");

        $(".ObjectCard").html( // Determines what is to show up on the Icon card
          function () {
            Icon = Math.round(Math.random() * 2)
            if (Icon == 2) {
              return "O";
            }
            else {
              return "X";
            }

          });
          if (Icon == 2) {
            $(document).keydown(function() {
                switch (window.event.keyCode) {
                    case 37:
                    circleCounter+=1;
                     $(".LeftSortingBin").html(circleCounter)
                     console.log('Player Scored a point');
                     break;
                    case 39:
                    console.log('Incorrect answer from the Player');
                     break;
                }
            });
          }
          else {
            $(document).keydown(function() {
                switch (window.event.keyCode) {
                    case 37:
                     console.log('Incorrect answer from the Player');
                     break;
                    case 39:
                    crossCounter+=1;
                    $(".RightSortingBin").html(crossCounter)
                    console.log('Player Scored a point');
                     break;
                }
            });
          }
        }
//             document.addEventListener("keydown", function(event) {
//   console.log(event.which);
// }
//     }

// $(document).keydown(function() {
//     switch (window.event.keyCode) {
//         case 37:
//          console.log('Left key is pressed');
//          break;
//         case 39:
// 		console.log('Right key is pressed');
//          break;
//     }
// });
