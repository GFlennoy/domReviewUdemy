// declare button variable and query select
var button = document.querySelector("button");
// declare boolean for toggling
var isPurple = false;
// add event listener and add two arguments
button.addEventListener("click", changeColor);

// define function outside of argument for cleaner code
function changeColor() {
  // if white, make it purple
  if (isPurple) {
    document.body.style.background = "white";
    // if purple, make white!
  } else {
    document.body.style.background = "purple";
  }
  //  Remember, toggle syntax!
  isPurple = !isPurple;
}
// you can also add a css file, and define background class
// ie:
// button.addEventListener("click", function(){
// document.body.classList.toggle("purple")
// });
