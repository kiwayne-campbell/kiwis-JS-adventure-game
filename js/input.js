const Input = {

  init: () => {
    // setup keyboard events
    document.addEventListener("keydown", (e)  => {
      Input.changeKey(e.keyCode, 1)
      console.log("keydown:", e.keyCode)
    });
    
    document.addEventListener("keyup", (e) => {
      Input.changeKey(e.keyCode, 0)
      console.log("keyup:", e.keyCode)
    });
  },

  // called on keyup and down events
  changeKey: (which, to) => {
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
      break;
  
      // down
      case 83:
      case 40:
      key[3] = to;
      break;
  
  
      // space bar - attack
      case 32:
      key[4] = to;
      break;
  
      // interact/ speak
      case 73:
      key[5] = to;
      break;

      // use item
      case 91: 
      key[5]=to; 
      break;

    }
  }

}