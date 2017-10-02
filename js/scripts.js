function loadPage(pageID) {

    $("#csci120").removeClass("selected");
    $("#csci115").removeClass("selected");
    $("#csci215").removeClass("selected");
    $("#about").removeClass("selected");
    setTimeout(function () {
        $("#" + pageID).addClass("selected");
    }, 20);



    $("#viewPageFrame").animate({

        marginTop: 100,
        opacity: 0



    }, {
        duration: 1000,
        specialEasing: {
            width: "swing",
            height: "swing"
        },
        complete: function () {
            $("#viewPageFrame").attr("src", pageID + "/index.html");
            setTimeout(function () {
                $("#viewPageFrame").animate({

                    marginTop: 0,
                    opacity: 1



                }, {
                    duration: 1000,
                    specialEasing: {
                        width: "swing",
                        height: "swing"
                    },
                    complete: function () {
//                     $("#viewPageFrame").attr("src", pageID + "/index.html");

                    }
                });
            }, 400);
        }
    });




}
