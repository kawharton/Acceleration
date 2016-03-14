// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 
var moves = 0;
  var lastMoveTime = 0;


//   var mover = 0;
// var red = document.getElementById('red');
// function move (input) {
	
// red.style.marginLeft = mover;
// mover+=(input);
// } 




socket.on('connect', function(){

  console.log('I have made a persistent two-way connection to the server!'); 
  
  // the draw event is emitted in whiteboard.js and caught here
  whiteboard.on('draw', function toBeRunOnlyOnDraw(e){
      socket.emit('imDrawing', e)
  })

  socket.on('otherDraw', function(data){
  	//console.log(e.acceleration.y);
    
  	// if(data) move(Math.abs(data));
            var d = new Date();
            var currentTime = d.getTime();
  //e.key="";    // just enter the char you want to send 

  if(data && Math.abs(data) > 4 && (currentTime-lastMoveTime)>5000) {
    console.log(currentTime - lastMoveTime);
    lastMoveTime = currentTime;
    console.log(data);
    var e = new Event("keydown");
  e.keyCode=38;
  e.which=e.keyCode;
  e.altKey=false;
  e.ctrlKey=true;
  e.shiftKey=false;
  e.metaKey=false;

  window.dispatchEvent(e);
  // e.preventDefault();
  // e.stopImmediatePropagation();
  
  // moves++;
  // console.log(moves);
setTimeout(function(){
     var e = new Event("keyup");
  e.keyCode=38;
  e.which=e.keyCode;
  e.altKey=false;
  e.ctrlKey=true;
  e.shiftKey=false;
  e.metaKey=false;

  window.dispatchEvent(e);
}, 250)

  }
 

  })
  
})


