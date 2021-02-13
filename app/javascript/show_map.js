
if ( document.URL.match(/photos/) ) {
  
  function map_display(){
    var myIcon = L.icon({
      iconUrl: '/assets/marker-icon-574c3a5cca85f4114085b6841596d62f00d7c892c7b03f28cbfa301deb1dc437.png',});
    $('.modal').fadeIn();
    var showmap = L.map('show-map');
    const latitude = $('#show-latitude').attr('data');
    const longitude = $('#show-longitude').attr('data');
    showmap.setView([latitude, longitude], 15);
            L.tileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18
            }).addTo(showmap);
            L.marker([latitude, longitude],{icon: myIcon}).addTo(showmap);
  }

  $(document).ready(function(){
    $('#map-display-btn').click(function() {
      map_display();
    });
    $('.close-icon-img').click(function() {
      $('.modal').fadeOut();
    });
    $('#return-btn').click(function() {
      history.back();
    });
  });
}