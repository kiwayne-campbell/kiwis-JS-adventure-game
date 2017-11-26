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
let lastTime = 0;
let animationUpdateTime = 0;
let timeSinceLastFrameSwap = 0;

function zoom(s) {
  canvas.style.cssText = 'width:'+width*s+'px;height:'+height*s+'px;';
  canvas.parentNode.style.cssText = 'width:'+width*s+'px;height:'+height*s+'px;';
}


let init = () => {
  
  // initialise the game
  buddha.src = 'images/link.png';
  player.x = 100;
  player.y = 100;

  // store an initial time
  lastTime = window.performance.now(); 
  // zoom sprite
  zoom();

  // setup the input
  Input.init();

  player.sequence = [3,4,5,6,5,4,3,2,1,0,1,2];
  player.sequenceIdx = 0;
  player.fps = 16;
  player.animationUpdateTime = 1000 / player.fps;
}


  // Here's where we handle all the input, logic and drawing to the screen per frame.
let main = () => {

    // the time in ms of each loop
    let now = window.performance.now();
    
      // how much time since last sequence ran
      let timeElapsed = (now - lastTime);

      // store the current time as now
      lastTime = now
      
    // move character
  // up
  if (key[2]) {
    player.y -= 4;
  } 
    
  // down
  if (key[3]) {
    player.y += 4;
  }
    
  //left
  if (key[0]) {
    player.x -= 4;
  }
   
  // right
  if (key[1]) {
    player.x += 4;
  }

  // rectangle example for canvas
  ctx.clearRect(0,0, 256, 224);
  // ctx.fillStyle = "#117c09";
  // ctx.fillRect(0,0,50,50);

  // loop through the walking sequence
  var spritePos = player.sequence[player.sequenceIdx] * 16;

  timeSinceLastFrameSwap += timeElapsed;

  // has enough time passed since last frame?
  if( timeSinceLastFrameSwap > player.animationUpdateTime ) {

    // enough time has passed display next frame
    if (player.sequenceIdx < player.sequence.length - 1 ){
      player.sequenceIdx++;
    } else {
      player.sequenceIdx = 0
    }

    // reset animation counter
    timeSinceLastFrameSwap = 0;
  }

  ctx.drawImage(buddha, spritePos, 0,16,25, player.x, player.y, 16, 25 );  
    
   // call itself by requesting the next animation frame, and so begin the endless loop
  requestAnimationFrame(main);
}

// initilaise the game by actually calling the function init
init();

// start the loop
requestAnimationFrame(main);