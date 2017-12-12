var initialize = function() {

  var mapDiv = document.getElementById('main-map'); //NEW

  var center = {lat: 55.946650, lng: -3.202200}; //NEW

  var mainMap = new MapWrapper(mapDiv, center, 19); //UPDATE

  var theClan = {lat: 55.946960, lng: -3.201959};

  var cuba = {lat: 19.899989, lng: -75.100050}
  mainMap.addMarker(center);
  mainMap.addMarker(theClan);

  mainMap.addClickEvent();

  var cubaButton = document.querySelector('#cuba-click');
  cubaButton.addEventListener('click', mainMap.recenter(cuba));

  mainMap.addInfoWindow(theClan, 'This is Codeclan, where dreams become reality!');

}


window.addEventListener('load', initialize);
