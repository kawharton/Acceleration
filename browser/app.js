// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 
  


  var mover = 0;
var red = document.getElementById('red');
function move (input) {
	
red.style.marginLeft = mover;
mover+=(input);
} 




socket.on('connect', function(){

  console.log('I have made a persistent two-way connection to the server!'); 
  
  // the draw event is emitted in whiteboard.js and caught here
  whiteboard.on('draw', function toBeRunOnlyOnDraw(e){
      socket.emit('imDrawing', e)
  })

  socket.on('otherDraw', function(data){
  	//console.log(e.acceleration.y);
  	if(data) move(Math.abs(data));
// console.log(e.acceleration.y);
//     console.log(e);
  })
  
})


