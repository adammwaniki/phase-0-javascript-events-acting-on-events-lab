// Your code here
//declaring  variables 
//const dodger = document.getElementById("dodger");

//changing the colour of the dodger
//dodger.style.backgroundColor = "#FF69B4";

//moving the dodger a distance of 100px from the bottom of its parent the game div
//this will be commented out to prevent conflict with the next line which resets the position 
//dodger.style.bottom = "100px";

//resetting its position
//if we don't comment out the previous line of code, this one will overrride it anyway because it comes after
//dodger.style.bottom = "0px";

/*
//moving the dodger to the left corner
//commenting this out so that i can see how the next line of code works
dodger.style.left = "0px";
*/

/*
//the main challenge with this method is that the dodger can eventually zoom out of sight once it reaches the end of the parent div i.e. the game
//adding an event listener for the pressing of the left directional key
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
*/

//let's make a separate function to handle the workings of the dodger since it's getting fairly complex
const dodger = document.getElementById("dodger");

//we now include an if statement to ensure that the dodger doesn't go beyond the left edge of the game
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  //attaching an event listener
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


/*  
//now let's make one for moving  right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (right > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  //attaching an event listener
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
*/
//function to make the dodger move to the right
function moveDodgerRight() {
    //technically this dodger moves with respect to the left edge even though it's moving to the right so i'll just call it leftpos which is short for left position
    const leftPos = parseInt(dodger.style.left.replace("px", ""), 10);
    if (leftPos > 0) {
        dodger.style.left = `${leftPos + 1}px`;
      }
}

// Attaching an event listener
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

