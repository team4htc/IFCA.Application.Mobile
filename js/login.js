var db = null;
//var URL_API = "http://localhost:3998";
//var SERVER_END_POINT_API = "http://localhost:3998";

$(document).one('pagecreate', function () {
   
    $("#index").click(function () {
        $.mobile.navigate("index.html", { transition: "slide", info: "info about the #bar hash" });
    });



    navigator.Backbutton.goHome(function () {
        alert("babai");
        console.log('success')
    }, function () {
        console.log('fail')
    });
});