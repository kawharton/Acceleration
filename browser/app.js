// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 
var stepSound = new Audio("../step.wav");

/*window.addEventListener('keydown', function(){
  console.log('hi from window'); 

  var e = new Event("keydown");
  e.keyCode=38;
  e.which=e.keyCode;
  document.getElementById('map').dispatchEvent(e);
});

document.getElementById('map').addEventListener('keydown', function(){console.log('hi from map');}, true);*/

socket.on('connect', function(){

  console.log('I have made a persistent two-way connection to the server!'); 
  
  // the draw event is emitted in virtualScene.js and caught here
  virtualScene.on('draw', function toBeRunOnlyOnDraw(e){
    socket.emit('imDrawing', e)
  })

  socket.on('otherDraw', function(data){

    if(data && Math.abs(data) > 3) {

      console.log(data);

  var e = new KeyboardEvent("keydown");


  e.altKey = false;
e.bubbles = true;
e.cancelBubble = false
e.cancelable = true;
e.charCode = 0;
e.ctrlKey = false;
e.currentTarget = document;
e.defaultPrevented = false;
e.detail = 0;
e.eventPhase = 3;
e.isTrusted = true;
e.isTrusted = true;
e.keyCode = 38;
e.keyIdentifier = "Up";
e.keyLocation = 0
//location = 0;
metaKey = false;
//path: Array[4]
e.repeat = false;
e.returnValue = true;
e.shiftKey = false;
//sourceCapabilities = InputDeviceCapabilities;
e.srcElement = document.body;
e.target = document.body;
e.timeStamp = 1461471064837;
e.type = "keydown";
//view = Window
e.which = 38;

  /*e.keyCode=38;
  e.which=e.keyCode;*/

      document.dispatchEvent(e);
      moveForward();

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
      //console.log(data);

      setTimeout(function(){
       var e = new Event("keyup");
       e.keyCode=38;
       e.which=e.keyCode;
       e.altKey=false;
       e.ctrlKey=true;
       e.shiftKey=false;
       e.metaKey=false;

       document.dispatchEvent(e);
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


function difference(link) {
  return Math.abs(panorama.pov.heading%360 - link.heading);
}

function moveForward() {
 // console.log('moveForward');
//  console.log(panorama);

  var curr;
  for(i=0; i < panorama.links.length; i++) {
    console.log('in for loop');
        console.log(panorama.links[i]);

    var differ = difference(panorama.links[i]);
    if(curr == undefined) {
      curr = panorama.links[i];
    }

    if(difference(curr) > difference(panorama.links[i])) {
      curr = panorama.links[i];

    }
  }

  console.log(curr.pano);
  panorama.setPano(curr.pano);
  panorama.setPov({heading:curr.heading,pitch:0});
  panorama.setVisible(true);
}