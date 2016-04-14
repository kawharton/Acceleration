      var canvas = document.getElementById("renderCanvas");
      var engine = new BABYLON.Engine(canvas, true);

      BABYLON.SceneLoader.Load("Espilit/", "espilit.babylon", engine, function(scene){
       scene.activeCamera.attachControl(canvas);

       engine.runRenderLoop(function (){
         scene.render();
       });
     });

      // Resize
      window.addEventListener("resize", function(){
       engine.resize();
     });