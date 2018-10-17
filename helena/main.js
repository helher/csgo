function GetValue()
{
    var maps= ["Cache","Mirage","Overpass","Inferno"];
    var random = maps[Math.floor(Math.random() * maps.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}

function GetJoker()
{
    var jokerMaps= ["Cache","Mirage","Overpass","Inferno","Austria","Office","Agency","Dust II", "Nuke", "Train", "Potatotes was here"];
    var random = jokerMaps[Math.floor(Math.random() * jokerMaps.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}