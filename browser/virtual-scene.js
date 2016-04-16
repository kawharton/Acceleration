window.virtualScene = new window.EventEmitter();

(function () {
    window.addEventListener('devicemotion', function (e) {
        if(e.acceleration.x || e.acceleration.y || e.acceleration.z) {
           ax = e.acceleration.x;
           ay = e.acceleration.y;
           az = e.acceleration.z;

           a = Math.sqrt(ax * ax + ay * ay + az * az);

           virtualScene.emit('draw', a); 
        }
    });
})();