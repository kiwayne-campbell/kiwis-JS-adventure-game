const canvas = document.getElementById("kiwi-js-adventure");
const ctx = canvas.getContext("2d");
const width = 256;
const height = 224;
let key = [0,0,0,0,0,0,0];
let buddha = new Image();
// let x = 0;
let player = {
  x: 0,
  y: 0
}


let init = () => {
  // initialise the game
  buddha.src = 'images/link_solo.png';
  player.x = 100;
  player.y = 100;

  // setup the input
  Input.init();
}

let main = () => {
  // Here's where we handle all the input, logic and drawing to the screen per frame.

  // rectangle example for canvas
  // ctx.clearRect(0,0, 256, 224);
  // ctx.fillStyle = "#117c09";
  // ctx.fillRect(x,0,50,50);

  ctx.drawImage(buddha, player.x, player.y);  

  // x = x + 1;

  // move character
  // up
  if (key[2]) 
    player.y -= 4;

  // down
  if (key[3])
    player.y += 4;

  //left
  if (key[0])
    player.x -= 4;
    
  // right
  if (key[1])
    player.x += 4;


   // call itself by requesting the next animation frame, and so begin the endless loop
  requestAnimationFrame(main);
}

// initilaise the game by actually calling the function init
init();

// start the loop
requestAnimationFrame(main);