$(document).ready(function() {
    // calculating body width for styling
    var body_width = $("body").width();
    var header_width = $('header').width();
    // Styling header
    $('header').css('margin-left', (body_width - header_width) / 2);
    //Getting the geo-location of the user
    function doGeo(position) {
        var latitude = position.coords.latitude,
            longitude = position.coords.longitude;
        saving_coordinates(latitude + "," + longitude);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(doGeo);
    }
    // Getting weather data
    function saving_coordinates(coordinates) {
        var lat = parseFloat(coordinates.split(',')[0]),
            lng = parseFloat(coordinates.split(',')[1]);
        var open_weather_url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=1f144e5252b7bdd3bc119a2e123ed8f1";
        $.ajax({
            method: 'GET',
            url: open_weather_url,
            dataType: 'json',
            success: function(data) {
                console.log(data);
            }
        });
        //getting city name
        var latlng = new google.maps.LatLng(lat, lng)
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'latLng': latlng
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    var address = results[1].formatted_address.split(',')
                    var city = address[1];
                    console.log(city);		
                }
            }
        });
    }
});