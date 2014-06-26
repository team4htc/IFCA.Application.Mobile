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

            if ($.mobile.activePage.is('#loginpage')) {
                e.preventDefault();
                navigator.app.exitApp();
            }
            else {
                alert("dsadsa");
                navigator.app.backHistory()
            }
        }, false);
    }
});