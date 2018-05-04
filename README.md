#Game Project: The Brain Trainer 
 

## Instructions
In order to play you need to clone this repo and open the index.html page from the file.

* The object card will display a random icon: Ring or Pyramid
* Rings go in the left basket (left arrow key). Pyramids in the right basket (right arrow key).
* Selecting the correct basket will display a green icon in your selected basket.
* Selecting the incorrect basket will display a red icon in your selected basket.
* Upon selecting the correct answer 1 point will be added to your score
* Upon selecting the incorrect answer 1 point will be deducted your score.
* You must have a minimum of 15 points in order to pass

## How I made The Brain Trainer
I Started by making the bootstrap layout in the html to section off the game title, mini-game title and game content.
The main game content and the start button with instructions are both in divs within the same row although upon loading the start button is shown whilst the game is hidden. When the start button is clicked then that div is then hidden and the game is shown.

The game has 4 divs which are for the icon card, sorting bins and score. Each div changes the DOM with keypress.
A function is carried out to time the round and when the timer runs out the page is refresh.

## Implementation
### HTML5 - Bootstrap 
Bootstrap was used to maniupilate the styling of the page. 

### CSS
Used to to hide the instructions div and game content div as well as colouring .

### Javascript - jQuery 
The javascript is used to to hide the instructions div once the "start game" button had been clicked. 

jQuery animate is used make the icons move by changing the CSS


