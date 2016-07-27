(function(){
    'use strict';

    // The map
    var map = L.map('map', {
        crs: L.CRS.EPSG4326,
        scrollWheelZoom: false
    }).setView(/*[43.5, -3.5], 6*/[49.25, 2.25], 5);

    // The base layer
    L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 18,
        attribution: [
                'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ',
                'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
                'Data by <a href="http://openstreetmap.org/">OpenStreetMap</a>, ',
                'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
            ].join("")
    }).addTo(map);

    // The marker data
    var marker_data = [{
        name: "Fernando González",
        img: "fernando",
        location: [52.2048, 6.1431]
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
