const canvas = document.getElementById("kiwi-js-adventure");
const ctx = canvas.getContext("2d");
const width = 256;
const height = 224;
let key = [0,0,0,0,0,0];
let buddha = new Image();
let x = 0;


const init = () => {
  // initialise the game
  buddha.src = 'images/buddha.png';
}

let changeKey = (which, to) => {
  switch(which) {
    // left
    case 65:
    case 37:
    key[0] = to;
    break;

    // up
    case 87:
    case 38:
    key[2] = to;
    break;

    // right
    case 68:
    case 39:
    key[1] = to;

    // down
    case 83:
    case 40:
    key[3] = to;


    // space bar
    case 32:
    key[4] = to;

    // interact/ speak
    case 73:
    key[5] = to;
  }
}

document.addEventListener("keydown", (e)=> {
  changeKey(e.keyCode, 1)
  console.log(e.keyCode)
})

let main = () => {
  // Here's where we handle all the input, logic and drawing to the screen per frame.
  // ctx.clearRect(0,0, 256, 224);
  ctx.drawImage(buddha, 20, 20);

  ctx.fillStyle = "#117c09";
  // ctx.fillRect(x,0,50,50);


  x = x + 1;

   // call itself by requesting the next animation frame, and so begin the endless loop
  requestAnimationFrame(main);
}

// initilaise the game by actually calling the function init
init();

// start the loop
requestAnimationFrame(main);