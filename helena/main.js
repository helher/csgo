function GetValue()
{
    var maps= ["Cache","Mirage","Overpass","Inferno"];
    var random = maps[Math.floor(Math.random() * maps.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}