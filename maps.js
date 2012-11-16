/* 
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html 
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */


	$("#map-page5").live("pageinit",function(){
	
	
		var defaultLatLng = new google.maps.LatLng(-2.143845255346832,-79.87932804311527);  // Default Terminal Terrestre  
	
		drawMap(defaultLatLng);  // No geolocation support, show default map	
	

	function drawMap(latlng) {
		var myOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		var map = new google.maps.Map(document.getElementById("map-canvas5"), myOptions);

		
		var image = new google.maps.MarkerImage(
  'images/busmarker.png',
  new google.maps.Size(56,29),
  new google.maps.Point(0,0),
  new google.maps.Point(28,29)
);

var shadow = new google.maps.MarkerImage(
  'images/shadow.png',
  new google.maps.Size(74,29),
  new google.maps.Point(0,0),
  new google.maps.Point(28,29)
);

var shape = {
  coord: [53,0,55,1,55,2,55,3,55,4,55,5,55,6,55,7,55,8,55,9,55,10,55,11,55,12,55,13,55,14,55,15,55,16,55,17,55,18,55,19,55,20,55,21,55,22,55,23,55,24,55,25,52,26,49,27,32,28,25,28,7,27,6,26,5,25,0,24,0,23,0,22,0,21,0,20,0,19,0,18,0,17,0,16,0,15,0,14,0,13,0,12,0,11,0,10,0,9,0,8,3,7,8,6,12,5,18,4,23,3,28,2,30,1,34,0,53,0],
  type: 'poly'
};
		
	
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: "Terminal Terrestre de Guayaquil",
			icon: image,
 			shadow: shadow,
  			shape: shape
		});
		
		 // Creating an InfowWindow          
          var infowindow = new google.maps.InfoWindow({
            content: 'Terminal Terrestre de Guayaquil'
          });
          
          // Adding a click event to the marker
          google.maps.event.addListener(marker, 'click', function() {
            // Opening the InfoWindow
          	infowindow.open(map, marker);
          });
		
	}
	
});
	
