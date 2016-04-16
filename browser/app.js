// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 
var stepSound = new Audio("../step.wav");

socket.on('connect', function(){

  console.log('I have made a persistent two-way connection to the server!'); 
  
  // the draw event is emitted in virtualScene.js and caught here
  virtualScene.on('draw', function toBeRunOnlyOnDraw(e){
    socket.emit('imDrawing', e)
  })

  socket.on('otherDraw', function(data){

    if(data && Math.abs(data) > 3) {

      console.log(data);
      var e = new Event("keydown");
      e.keyCode=38;
      e.which=e.keyCode;
      e.altKey=false;
      e.ctrlKey=true;
      e.shiftKey=false;
      e.metaKey=false;

      window.dispatchEvent(e);

      var timeout;
      if (data < 4){
        stepSound.play()
        timeout = 400;

      }
      else if (data < 8){
        stepSound.play()
        stepSound.play()
        stepSound.play()
        timeout = 1000;
      }
      else {
        timeout = 2000;
        stepSound.play()
        stepSound.play()
        stepSound.play()
        stepSound.play()
        stepSound.play()
      }
      console.log(data);

      setTimeout(function(){
       var e = new Event("keyup");
       e.keyCode=38;
       e.which=e.keyCode;
       e.altKey=false;
       e.ctrlKey=true;
       e.shiftKey=false;
       e.metaKey=false;

       window.dispatchEvent(e);
     }, timeout);
    }
  })
})

//room
// var socket = io(location.origin);

// socket.on('connect', function () {

//     var room = 'room';

//     socket.emit('wantToJoinRoomPlox', room);

//     virtualScene.on('draw', function (e){
//     socket.emit('newDraw', e);
//   })



//     // socket.on('drawHistory', function (drawHistory) {
//     //     drawHistory.forEach(function (draw) {
//     //         virtualScene.draw(draw.start, draw.end, draw.color);
//     //     });
//     // });

//     // socket.on('someoneElseDrew', function (start, end, color) {
//     //     virtualScene.draw(start, end, color);
//     // });

// });


