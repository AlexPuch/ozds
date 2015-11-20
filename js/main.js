//collapse
$(document).on("show.bs.collapse","#myNavbar", function() {
  $(".lang").removeClass("show");
  $(".burger").html('<span>&times;</span>');
});
$(document).on("hide.bs.collapse","#myNavbar", function() {
  $(".lang").addClass("show");
  $(".burger").html('<span class="flaticon-menu45"></span>');
});

// MADAL FIX --- add paddint to element with position:fixed
var $targetClass = '.header',
    myObj = {$body:$(document.body)},
    scrollWidth = $.fn.modal.Constructor.prototype.measureScrollbar.call(myObj);


$(document).on('show.bs.modal', function(){
    $($targetClass).css("padding-right",scrollWidth);
});

$(document).on('hidden.bs.modal', function (){
    $($targetClass).css("padding-right","0");
});

//Google maps
var map;
var marker;
var theatre = new google.maps.LatLng(50.429992, 30.537558);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#919191"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f8f8f8"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f7f7f7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e1e1e1"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "saturation": "0"
            }
        ]
    }
]

  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: theatre,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

 var image = 'images/marker.png'
 marker = new google.maps.Marker({
 position: theatre,
 title: "OZIDEA design studio",
 animation: google.maps.Animation.DROP,
 icon: image
 });
 google.maps.event.addListener(marker, 'click', toggleBounce);

 marker.setMap(map);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
};

