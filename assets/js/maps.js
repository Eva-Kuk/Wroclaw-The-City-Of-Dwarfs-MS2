/*jshint esversion: 6 */
/* CREDIT: Google map documentation used and and Code institute lessons and customized link:https://developers.google.com/maps/documentation*/
    
//Add the map of Poland
function initMap(){

    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {lat:52.237049, lng:21.017532},
    });
// Add the location marker of Wroclaw on the map
    let marker = new google.maps.Marker({
        position: {lat:51.1079, lng:17.0385},
        map:map
    });

// Add the info of Wroclaw on the map
    let infoWindow = new google.maps.InfoWindow({
        content:'<h4>Wroclaw</h4>',
    });

    marker.addListener('mouseover', () => {
        infoWindow.open(map, marker);
    });

}
//Add the map of Wroclaw with locations of the attractions when pressed on the button 'Attractions'
document.getElementById("btn-attractions").addEventListener("click",initMapAttractions);
function initMapAttractions() {
    let attractionsMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {lat:51.1079, lng:17.0385},
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Add markers to attractionsMarkers Array
    const attractionsMarkers = [
        {
            location: {lat:51.1008, lng:17.0300}, 
            info:"<h5>Capitol</h5><p>The Capitol Musical Theater offers entertainment and bold reflection</p>"
        },
        {
            location: {lat:51.1044, lng:17.0752}, 
            info:"<h5>Wrocław Africarium</h5><p>Spacious zoo with exhibits of 1,000 animals and a large oceanarium with around 5,000 animals.</p>",
        },
        {
            location: {lat:51.1101, lng:17.0443}, 
            info:"<h5>Panorama of the Battle of Raclawice</h5><p>The Monumental cycloramic painting depicting the Battle of Racławice, during the Kościuszko Uprising.</p>",
        },
        {
            location: {lat:51.1142, lng:17.0466}, 
            info:"<h5>Cathedral of St. John the Baptist</h5><p> The cathedral, located in the Ostrów Tumski district, is a Gothic church with Neo-Gothic additions </p>"
        },
        {
            location: {lat:51.1088, lng:17.0789}, 
            info:"<h5> Wrocław Multimedia Fountain</h5><p>The multimedia musical fountain and ornamental pond, runs only during the summer season </p>"
        },
        {
            location: {lat:51.0945, lng:17.0196}, 
            info:"<h5>Kolejkowo</h5><p> Artistic venue featuring a range of detailed miniature worlds with model trains & local landmarks.</p>"
        },
        {
            location: {lat:51.1055, lng:17.0320}, 
            info:"<h5>The Wrocław Opera</h5><p>The opera house was opened in 1841 and up to 1945 was named after the city's then German name, Oper Breslau</p>"
        },
        {
            location: {lat:51.1137, lng:17.0334}, 
            info:"<h5>Museum of the University of Wroclaw</h5><p>The museum is  displaying many of the amazing historical objects: Aula Leopoldina, Oratorium Marianum,  Mathematical Tower</p>"
        },
        {
            location: {lat:51.1098, lng:17.0327}, 
            info:"<h5>Market Square</h5><p> The square is rectangular with the dimensions. It is one of the largest market squares in Europe, with the largest two city halls in the country.</p>"
        },
        {
            location: {lat: 51.0897, lng:17.0172}, 
            info:"<h5>Sky Tower Viewpoint</h5><p> Sky Tower is a skyscraper with the view point of Wroclaw on the top 49th floor in 1 minute with the lift.</p>"
        },
        {
            location: {lat:51.1042, lng:17.0566}, 
            info:"<h5>Hydropolis</h5><p>The Hydropolis Centre for Ecological Education, is a science centre dedicated to water. Its exhibitions use a variety of technology about the role of water in the environment.</p>"
        },
        {
            location: {lat:51.1145, lng:17.0467}, 
            info:"<h5>Ostrów Tumski</h5><p>The oldest, historic part of Wrocław, full of monuments, museums and beautiful flora that you can admire in the Botanical Garden.</p>"
        },
        {
            location: {lat:51.1079, lng:17.0289}, 
            info:"<h5>The City Museum of Wroclaw</h5><p> The Royal Palace is a palace in Wrocław, Poland. Originally a palace of the Prussian monarchy, now it houses the city museum. </p>"
        },
    ];
// add click listener to each marker which opens the InfoWindow with attractionsMarkers info
//<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow
        let infowindow = new google.maps.InfoWindow();

        let markers = attractionsMarkers.map(function (attractionsMarkers, i) {
        let marker = new google.maps.Marker({
            position:attractionsMarkers.location,
            label: labels[i % labels.length]
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(attractionsMarkers.info);
            infowindow.open(attractionsMap, marker);
        });
        return marker;

    });

    let markerCluster = new MarkerClusterer(attractionsMap, markers, {
        imagePath:
                "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Add the map of Wroclaw with locations of the FoodDrinks when pressed on the button 'Food&Drinks'
document.getElementById("btn-food-drinks").addEventListener("click",initMapfoodDrinks);
function initMapfoodDrinks() {
    let foodDrinksMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {lat:51.1079, lng:17.0385},
    });

let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 // Add markers to foodDrinksMarkers Array
const foodDrinksMarkers = [
    {
        location: {lat:51.1092, lng:17.0320}, 
        info: "<h5>Whiskey in the Jar</h5><p> Unique place, high-class steakhouse, offering beefsteaks of highest value, prepared on lava grill</p>"
    },
    {
        location: {lat:51.1100, lng:17.0312}, 
        info: "<h5>Spiż - Microbrewery and Restaurant</h5><p>A brewery opened in the underground is one of the favourite places to relax. Despite the beer that is brewed there, according to the original recipie, in the basements of the Town Hall there is a restaurant.</p>"
    },
    {
        location: {lat:51.1094, lng:17.0304}, 
        info: "<h5>Solny 20 Restaurant</h5><p> The cosy restaurant (expanded with an outdoor patio) is an excellent place for fast breakfast, nourishing lunch, an afternoon meeting with friends and a romantic evening for two.</p>"
    },
    {
        location: {lat:51.1095, lng:17.0305}, 
        info: "<h5>Novocaina Restaurant</h5><p>One of the most recognised and trusted Wrocław restaurants. The venue offers a rich variety of traditional Mediterranean dishes and a selection of regional dished from northern Italy.</p>"
    },
    {
        location: {lat:51.1083, lng:17.0362}, 
        info:"<h5>The restaurant “Hubertus”</h5><p>Traditional Polish cuisine, with natural ingredients and a wide range of game dishes. It has existed for 40 years now. For example, it serves a portion of boar or venison, as you like and according to the season.</p>"
    },
    {
        location: {lat:51.1083, lng:17.0262}, 
        info:"<h5>Ślepy Zaułek</h5><p>Bar & restaurant in secluded Pasaż Pokoyhof. In the menu there are lunches, burgers and grilled dishes, Italian, Mediterranean and vegetarian cuisine</p>"
    },
    {
        location: {lat:51.1083, lng:17.0354}, 
        info:"<h5>Vertigo Jazz Club & Restaurant</h5><p>Vertigo club and restaurant. Almost everyday the club hosts jazz concerts.</p>"
    },
    {
        location: {lat:51.1105, lng:17.0260}, 
        info:"<h5>Machina Organika</h5><p>The restaurant offers healthy food, in menu there arebreakfasts, lunches and desserts. The restaurant is located near Wrocław’s Rynek.</p>"
    },
    {
        location: {lat:51.1114, lng:17.0292}, 
        info:"<h5>Ambasada Bar</h5><p>Ambasada is a place in the heart of the city centre, where the trails of people from Wrocław and tourists exploring party side of Wrocław cross each other. The place serves simple dishes and affordable drinks</p>"
    },
    {
        location: {lat:51.1128, lng:17.0323}, 
        info:"<h5>Kociołek bar&grill</h5><p> The speciality of Kociołek bar&grill are the meals from oven, meat, fish, vegetable dishes.  </p>"
    }
];
// add click listener to each marker which opens the InfoWindow with foodDrinksMarkers info
//<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow
let infowidow = new google.maps.InfoWindow();

let markers = foodDrinksMarkers.map(function (foodDrinksMarkers, i) {
let marker =  new google.maps.Marker({
        position:foodDrinksMarkers.location,
        label: labels[i % labels.length]
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowidow.setContent(foodDrinksMarkers.info);
        infowidow.open(foodDrinksMap, marker);
    });
    return marker;
});

let marker = new MarkerClusterer(foodDrinksMap, markers, {
    imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});
}

//Add the map of Wroclaw with locations of the accomodation when pressed on the button 'Accomodation'
document.getElementById("btn-accomodation").addEventListener("click",initMapAccomodation);
function initMapAccomodation() {
    let accomodationMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {lat:51.1079, lng:17.0385},
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Add markers to accomodationMarkers Array
    const accomodationMarkers = [
        {
            location: {lat:51.1092, lng:17.0377}, 
            info:"<h5>Hotel LOTHUS</h5><p>Functional accomodations in a strinking stone hotel with a sophisticated</p>"
        },
        {
            location: {lat:51.1160, lng:17.0406}, 
            info:"<h5>Hotel TUMSKI</h5><p> Grand hotel dating from 1885, with free breakfast & an adjacent barge housing a restaurant and pub</p>"
        },
        {
            location: {lat:51.0985, lng:17.0242}, 
            info:"<h5>IBIS Wroclaw Centrum</h5><p>Laid-back hotel offering bright rooms & 24-hour bar</p>"
        },
        {
            location: {lat:51.1173, lng:17.0358}, 
            info:"<h5>Hotel HP Park PLAZA</h5><p>Polished riverfront lodging with a  spa and a terrace, as well as an upscale restaurant and a lobby bar</p>"
        },
        {
            location: {lat:51.1061, lng:17.0313}, 
            info:"<h5>Hotel MONOPOL</h5><p>Luxe hotel offering a trendy rooftop restaurant, free breakfast and a spa with an indoor pool</p>"
        },
        {
            location: {lat:51.1091, lng:17.0343}, 
            info:"<h5>QUBUS Hotel Wrocław</h5><p>Bright rooms and polished suites in a modern hotel with an airy European restaurant, a bar and a sauna.</p>"
        },
        {
            location: {lat:51.1014, lng:17.0279}, 
            info:"<h5>SCANDIC WROCLAW</h5><p>The hotel is conveniently located in central Wrocław, Eco-certified, offers air-conditioned rooms with a flat-screen TV, a mini-bar and free WiFi.</p>"
        },
        {
            location: {lat:51.1080, lng:17.0249}, 
            info:"<h5>PURO</h5><p>It is conveniently located in the very center of Wrocław, just 500 m from the Old Market Square.</p>"
        },
        {
            location: {lat:51.1086, lng:17.0391}, 
            info:"<h5>MERCURE Wroclaw Centrum</h5><p>The contemporary hotel with a redbrick and glass facade 10-minute walk from Wrocław Town Hall</p>"
        },
    ];
    // add click listener to each marker which opens the InfoWindow with accomodationMarkers info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow
    let infowindow = new google.maps.InfoWindow();

    let markers = accomodationMarkers.map(function (accomodationMarkers, i) {
    let marker = new google.maps.Marker({
            position:accomodationMarkers.location,
            label: labels[i % labels.length]
        });
        google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(accomodationMarkers.info);
                infowindow.open(accomodationMap, marker);
    });
    return marker;
    });

    new MarkerClusterer(accomodationMap, markers, {
        imagePath:
                "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}

//Add the map of Wroclaw with locations of the attractions when pressed on the button 'Attractions'
document.getElementById("btn-dwarfs").addEventListener("click",initMapDwarfs);
function initMapDwarfs() {
    let dwarfsMap = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {lat:51.1079, lng:17.0385},
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Add markers to dwarfsMarkers Array
    const dwarfsMarkers = [
        {
            location: {lat:51.109661, lng:17.031686}, 
            info:"<h5>Deaf, Blind man, W-Skers </h5><p>Three disabled dwarfs, who are ambassadors of the campaign 'Wroclaw without borders', which promotes making Wroclaw a city friendly for disabled people.</p>"
        },
        {
            location: {lat:51.109167, lng:17.067436}, 
            info:"<h5>Surgeon</h5><p>The surgeon is practicing at the Medical Academy. He has a difficult specialization and his hands are full. Operating on dwarfs is a real challenge. Imagine, for example, how thin the stitching thread must be! In fact, he should be called a microsurgeon.</p>"
        },
        {
            location: {lat:51.109056, lng:17.026528}, 
            info:"<h5>Younger cinema lover</h5><p>A lover of film art, traveling the world in search of pearls of world cinema. His hiking trail is marked by the largest film festivals.</p>"
        },
        {
            location: {lat:51.108694, lng:17.033}, 
            info:"<h5>Korpokrasnal</h5><p>'Corpo-Dwarf', he is a dwarf from a large corporation who spends days and nights at the computer to please his employers.</p>"
        },
        {
            location: {lat:51.106456, lng:17.027083}, 
            info:"<h5>Dwarfs of the Wrocław Philharmonic</h5><p>An orchestra of 21 dwarfs which are a very musical creatures. They are hardworking guys, and they work best when there is music.</p>"
        },
        {
            location: {lat:51.109572, lng:17.034533}, 
            info:"<h5>Motorcyclist</h5><p>This dwarf steadily drives his vehicle with one hand, and with the other he greets passing drivers and passers-by. The first motorized dwarf in our city, a devoted friend of all lovers of riding on two wheels.</p>"
        },
        {
            location: {lat:51.107175, lng:17.031997}, 
            info:"<h5>Papa Dwarf</h5><p>Papa Dwarf is the first dwarf that appeared in Wroclaw on June 1, 2001. The most eminent dwarf inhabitant of Wrocław. In the old days, an active participant in social life and politically involved activist of the Orange Alternative. Today, on a well-deserved retirement, he is the leader of Wrocław dwarfs. Chairman of the Wrocław Dwarf Council.</p>"
        },
        {
            location: {lat:51.111136, lng:17.030742}, 
            info:"<h5>WrocLovek</h5><p>He is a lover of Wrocław who infects all dwarfs with his love for Wrocław, and who greets tourists with a big smile</p>"
        },
        {
            location: {lat:51.108928, lng:17.032869}, 
            info:"<h5>Sisyphus</h5><p> Pusher Lifting the ball are the most popular, very hardworking and a bit unbright dwarfs in the city who feel the need to help other people, but they went to work in a slightly ... unusual way.</p>"
        },
        {
            location: {lat:51.110733, lng:17.033558}, 
            info:"<h5>Croissant</h5><p>This dwarf is located next to the newly established Bakery-Restaurant 'Mr Croissant'.</p>"
        },
        {
            location: {lat:51.112667, lng:17.041944}, 
            info:"<h5>ParkM</h5><p>He participated in the modernization of the Odra embankment and the wells. If it weren't for him, the boulevard wouldn't look as beautiful as it does now. Keep an eye on him - he's going there with his excavator!</p>"
        },
        {
            location: {lat:51.116303, lng:17.047167}, 
            info:"<h5>Ogorzałek and Filek</h5><p>These two dwarfs, regardless of the prohibitions in the city - pour booze and drink it, officially.</p>"
        },

    ];
    //add click listener to each marker which opens the InfoWindow with dwarfsMarkers info
    //<!--CREDIT: solution for Integrate Google Maps MarkerClusterer with infowindow from stackoverflow
            var infowindow = new google.maps.InfoWindow();

    let markers = dwarfsMarkers.map(function (dwarfsMarkers, i) {
        let marker = new google.maps.Marker({
            position:dwarfsMarkers.location,
            label: labels[i % labels.length]
        });
        google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(dwarfsMarkers.info);
                infowindow.open(dwarfsMap, marker);
        });
        return marker;
    });

    new MarkerClusterer(dwarfsMap, markers, {
        imagePath:
                "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
