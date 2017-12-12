var MapWrapper = function(container, coords, zoom) { //UPDATE
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom //UPDATE
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
}

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    console.log(event);
    console.log(event.latLng.lat());
  }.bind(this));

  MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
}

MapWrapper.prototype.addInfoWindow = function (coords, content) {
  var info = new google.maps.InfoWindow({
    position: coords,
    content: content
  });
  info.open(this.googleMap);
};

MapWrapper.prototype.recenter = function (coords) {
  const map = this.googleMap;
  map.setCenter(coords);
};

}
