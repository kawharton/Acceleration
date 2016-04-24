// var map;
//     function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 42.345573, lng: -71.098326},
//           zoom: 14
//         });
//       }

// function initialize() {
//   var fenway = {lat: 42.345573, lng: -71.098326};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: fenway,
//     zoom: 14
//   });
//   var panorama = new google.maps.StreetViewPanorama(
//       document.getElementById('pano'), {
//         position: fenway,
//         pov: {
//           heading: 34,
//           pitch: 10
//         }
//       });
//   map.setStreetView(panorama);
// }

function initPano() {
  // Note: constructed panorama objects have visible: true
  // set by default.
  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('map'), {
        position: {lat: 42.345573, lng: -71.098326},
        addressControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        linksControl: false,
        panControl: false,
        enableCloseButton: false
  });
}