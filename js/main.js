//modal view

/******variant1******
var activeProjectUrl='';
$(document).on('click','.overlay a', function(){
    activeProjectUrl = $(this).attr("href");
    history.pushState({},'',activeProjectUrl); //show url as a real
    $('#content-target').load("activeProjectUrl #project-content"); //load content
});
$(document).on('hidden.bs.modal', function (){
    history.back();
});

// MADAL FIX --- add paddint to element with position:fixed
var $targetClass = '.navbar-fixed-top',
    myObj = {$body:$(document.body)},
    scrollWidth = $.fn.modal.Constructor.prototype.measureScrollbar.call(myObj);
$(document).on('show.bs.modal', function(){
    $($targetClass).css("padding-right",scrollWidth);
});
$(document).on('hidden.bs.modal', function (){
    $($targetClass).css("padding-right","0");
});
*/

/******variant2******
$('#content-target').load("./cherity.html", function(result) {
    var obj = $(this).find("#project-content"),
        html = obj.html();
    $(this).append($("<div>").text(html));
});
*/

/******variant3******
/*
(function($){
        var http = "http:",
            https = "https:",
            rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script/gi,
            proto = local.protocol,
            otherProtoUri = new RegExp("\\b" + (proto === http ? https : http) + "(//[a-z\\d.-]+)", "gi");
        $.fn.protocolModifyLoad = function(url, yesIKnowThisFragile, selector) {
            var self = this;

            if ( !this.length || !yesIKnowThisFragile) {
                return this;
            }

            $.ajax({
                url: url,
                type: "GET",
                dataType: "html",
                complite: function(res,status) {
                    if (status === "success" || status === "notmodified") {
                        var response = res.responseText.replace(otherProtoUri, proto + "$1");
                        self.html( selector ?
                            jQuery("<div").append(response.replace(rscript, "")).find(selector) : response);
                    }
                }
            });

            return this;
        };
    })(jQuery);
*/

//collapse
$(document).on("show.bs.collapse","#myNavbar", function() {
  $(".lang").removeClass("show");
  $(".burger").html('<span>&times;</span>');
});
$(document).on("hide.bs.collapse","#myNavbar", function() {
  $(".lang").addClass("show");
  $(".burger").html('<span class="flaticon-menu45"></span>');
});


//Google maps
var map;
var marker;
var theatre = new google.maps.LatLng(50.469494,30.466671);

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
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a1dba6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fff36b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": "10.00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "10.00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": "3.64"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#8ac4bf"
            },
            {
                "visibility": "on"
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

 var image = 'img/marker.png'
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
}

// google maps initialize
$('div').hasClass('contacts-part') && initialize();

