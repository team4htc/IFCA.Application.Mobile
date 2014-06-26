var db = null;
//var URL_API = "http://localhost:3998";
//var SERVER_END_POINT_API = "http://localhost:3998";



$(document).one('pagecreate', function () {


    $("#index").click(function () {
        $.mobile.navigate("index.html", { transition: "slide", info: "info about the #bar hash" });
        // navigator.app.exitApp();
    });


    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        document.addEventListener("backbutton", function (e) {

            //alert("back button");

            if ($.mobile.activePage.is('#homepage')) {
                e.preventDefault();
                alert("ready to exit?");
                navigator.app.exitApp();
            }
            else {
                alert("back to history");
                navigator.app.backHistory()
            }
        }, false);
    }
});