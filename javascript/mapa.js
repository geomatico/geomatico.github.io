(function(){
    'use strict';

    // The map
    var map = L.map('map', {
        crs: L.CRS.EPSG4326,
        scrollWheelZoom: false
    }).setView(/*[43.5, -3.5], 6*/[49.25, 2.25], 5);

    // The base layer
    L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
        subdomains: '1234',
        minZoom: 2,
        maxZoom: 17,
        attribution: 'Map data © <a href="http://www.openstreetmap.org" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">'
    }).addTo(map);

    // The marker data
    var marker_data = [{
        name: "Fernando González",
        img: "fernando",
        location: [55.06328201, 11.57512665]
    },{
        name: "Oscar Fonts",
        img: "oscar",
        location: [46.26666498, 2.25481510]
    },{
        name: "Micho García",
        img: "micho",
        location: [46.68171787, -8.72563362]
    },{
        name: "Víctor González",
        img: "victor",
        location: [43.00245665, -0.38314819]
    },{
        name: "Martí Pericay",
        img: "marti",
        location: [45.3776, 2.1834]
    }/*,{
     name: "Jorge Arévalo",
     img: "jorge",
     location: [44.25410842, -3.69724274]
     }*/];

    var markers = L.markerClusterGroup();

    for(var i = 0; i < marker_data.length; i++) {
        var member = marker_data[i];
        L.marker(member.location, {
            icon: L.icon({
                iconUrl: "/imagenes/retrato_mapa_" + member.img + ".png",
                iconAnchor: [25, 25],
                popupAnchor: [0, -20]
            })
        }).addTo(markers).bindPopup("<h4 style='white-space:nowrap;'>" + member.name + "</h4>");
    }

    map.addLayer(markers);

})()