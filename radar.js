var map;
function initialize() {
    var myLatLng = new google.maps.LatLng(-39.8333, 97.4167);

    var mapOptions = {
        zoom: 7,
        center: myLatLng,
        disableDefaultUI: true,
        zoomControl: true,
        panControl: true
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Load Images and add them to imageArray
    tileNEX = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/0/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX);

    tileNEX5 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m05m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/5/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD5',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX5);

    tileNEX10 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
            return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m10m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/10/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD10',
        isPng: true,
        optimized: false
    });
    map.overlayMapTypes.push(tileNEX10);

    tileNEX15 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m15m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/15/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD15',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX15);

    tileNEX20 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m20m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/20/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD20',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX20);

    tileNEX25 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m25m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/25/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD25',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX25);

    tileNEX30 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m30m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/30/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD30',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX30);

    tileNEX35 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m35m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/35/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD35',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX35);

    tileNEX40 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m40m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/40/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD40',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX40);

    tileNEX45 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m45m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/45/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD45',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX45);

    tileNEX50 = new google.maps.ImageMapType({
        getTileUrl: function(tile, zoom) {
             return "http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m50m/" + zoom + "/" + tile.x + "/" + tile.y +".png?"+ (new Date()).getTime();
//            return "http://myweather.app/radar/50/" + zoom + "/" + tile.x + "/" + tile.y +".png?" + (new Date()).getTime();
        },
        tileSize: new google.maps.Size(256, 256),
        opacity:0.00,
        name : 'NEXRAD50',
        isPng: true,
    });
    map.overlayMapTypes.push(tileNEX50);

    var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
      });

    // Start radar animation
    Radar.animateStart();

    // Handle the button clicks
    $('.map-control-btns').on('click', '.btn', Radar.btnClick);

}
google.maps.event.addDomListener(window, 'load', initialize);

var Time = {
    timeAgo: function(date) {
        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return "currently";
    }
};

var Radar = {

    interval: 0,
    currentIndex: 0,

    animateStart: function() {
        Radar.currentIndex = map.overlayMapTypes.getLength() - 1;

        // Toggle play/pause btn
        $('.map-control-btns .fa-play').toggleClass('fa-play fa-pause');

        Radar.interval = setInterval(function(){

            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.00);

            Radar.currentIndex--;
            if(Radar.currentIndex < 0){
                Radar.currentIndex = map.overlayMapTypes.getLength() - 1;
            }

            //if(Radar.currentIndex == (map.overlayMapTypes.getLength() - 1)){ $.delay(2000); }
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.60);

            var pct = ((map.overlayMapTypes.getLength() - 1 - Radar.currentIndex) / (map.overlayMapTypes.getLength() - 1) * 100);
            $('#progress-bar-radar').css('width', pct + '%').attr('aria-valuenow', pct);

            var timeAgo = Time.timeAgo(new Date().getTime() - (((Radar.currentIndex + 1) * 5) * 60 * 1000));
            $('#time-ago').html(timeAgo);

        }, 700);
    },

    animateStop: function() {
        clearInterval(Radar.interval);
        $('.map-control-btns .fa-pause').toggleClass('fa-play fa-pause');
    },

    centerMap: function() {
        var origin = new google.maps.LatLng(locationLat, locationLon);
        map.panTo(origin);
        map.setZoom(7);
    },

    btnClick: function(e) {
        var icon = $(this).children('.fa');

        if(icon.hasClass('fa-play')) {
            Radar.animateStart();
            return;
        }
        if(icon.hasClass('fa-pause')) {
            Radar.animateStop();
        }
        if(icon.hasClass('fa-step-backward')) { // Previous frame
            Radar.animateStop();
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.00);
            Radar.currentIndex++;
            if(Radar.currentIndex > map.overlayMapTypes.getLength() - 1){
                Radar.currentIndex = 0;
            }
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.60);
        }
        if(icon.hasClass('fa-step-forward')) { // Next frame
            Radar.animateStop();
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.00);
            Radar.currentIndex--;
            if(Radar.currentIndex < 0){
                Radar.currentIndex = map.overlayMapTypes.getLength() - 1;
            }
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.60);
        }
        if(icon.hasClass('fa-backward')) { // Last frame
            Radar.animateStop();
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.00);
            Radar.currentIndex = map.overlayMapTypes.getLength() - 1;
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.60);
        }
        if(icon.hasClass('fa-forward')) { // First frame
            Radar.animateStop();
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.00);
            Radar.currentIndex = 0;
            map.overlayMapTypes.getAt(Radar.currentIndex).setOpacity(0.60);
        }
        if(icon.hasClass('fa-arrow-circle-o-down')) {
            $('#map').css('height', '500px');
            Radar.centerMap();
            $('.fa-arrow-circle-o-down').addClass('fa-arrow-circle-o-up').removeClass('fa-arrow-circle-o-down');
            return;
        }
        if(icon.hasClass('fa-arrow-circle-o-up')) {
            $('#map').css('height', '300px');
            $('.fa-arrow-circle-o-up').addClass('fa-arrow-circle-o-down').removeClass('fa-arrow-circle-o-up');
            Radar.centerMap();
        }
        if(icon.hasClass('fa-location-arrow')) {
            Radar.centerMap();
        }


        // Update progress bar on button click
        var pct = ((map.overlayMapTypes.getLength() - 1 - Radar.currentIndex) / (map.overlayMapTypes.getLength() - 1) * 100);
        $('#progress-bar-radar').css('width', pct + '%').attr('aria-valuenow', pct);

    }

};
