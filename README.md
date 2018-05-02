#Game Project: The Brain Trainer 
 

## Instructions
In order to play you need to clone this repo and open the index.html page from the file.

Upon landing on the main page press the "Start Game" Button to begin playing. The top box will display either a circle or cross, you must decide in which of the boxes below it should be sorted into. The left box takes circles and the right box takes crosses. 
To select the circle box press the left arrow key, and for the cross box press the right arrow key. 
Upon selecting a box a coloured icon will appear in the box you selected. The green icon means your answer was correct and the red icon means incorrect.
Once your choice has been selected and determined to be correct or not the final box at the bottom will display your score. Every correct answer grants 1 point whilst incorrect answers take away 1 point.
The game round is 30 seconds long and so players must aim to get the highest possible score.
In order to pass a minimum score of 10 is required.


## How i made
I Started by making the bootstrap layout in the html to section off the game title, mini-game title and game content.
The main game content and the start button with instructions are both in divs within the same row although upon loading the start button is shown whilst the game is hidden. When the start button is clicked then that div is then hidden and the game is shown.

The game has 4 divs which are for the icon card, sorting bins and score. Each div changes the DOM with keypress.
A function is carried out to time the round and when the timer runs out the page is refresh.

## Implementation
* HTML5
* CSS
* BootStrap 
* Javascript 
* JQuery 

