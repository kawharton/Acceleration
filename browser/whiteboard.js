
// this is global now 
window.whiteboard = new window.EventEmitter();

(function () {

    // Ultimately, the color of our stroke;
    var color;

    // The color selection elements on the DOM.
    var colorElements = [].slice.call(document.querySelectorAll('.marker'));

    colorElements.forEach(function (el) {

        // Set the background color of this element
        // to its id (purple, red, blue, etc).
        el.style.backgroundColor = el.id;

        // Attach a click handler that will set our color variable to
        // the elements id, remove the selected class from all colors,
        // and then add the selected class to the clicked color.
        el.addEventListener('click', function () {
            color = this.id;
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
        });

    });

    var canvas = document.querySelector('#paint');
    var sketch = document.querySelector('#sketch');
    var sketchStyle = getComputedStyle(sketch);

    canvas.width = parseInt(sketchStyle.getPropertyValue('width'));
    canvas.height = parseInt(sketchStyle.getPropertyValue('height'));

    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    var currentMousePosition = {
        x: 0,
        y: 0
    };

    var lastMousePosition = {
        x: 0,
        y: 0
    };

    var drawing = false;

    window.addEventListener('devicemotion', function (e) {
        // setTimeout(function(){
        //     debugger;
        // }, 5000)

        if(e.acceleration.x || e.acceleration.y || e.acceleration.z) {
           whiteboard.emit('draw', e.acceleration.y); 
           //console.log(e);
        }
    });



//         window.addEventListener('keydown', function (e) {
//            function simulateKeyPress(character) {
//   jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
// }

// $(function() {
//   $('body').keypress(function(e) {
//     alert(e.which);
//   });

//   simulateKeyPress("e");
// });

  
//     });



})();