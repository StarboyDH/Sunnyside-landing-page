$(function () {
    $("#grph-link-1").hover(function () {
        $("#link-underline-1").css({
            "background-color": "#f46b5b",
            "border-color": "#f46b5b",
            "transition": "0.3s ease-in-out",
        })
    }, function () {
        $("#link-underline-1").css({
            "background-color": "#f4d500",
            "border-color": "#f4d500",
            "transition": "0.3s ease-in-out",
        })
    });

    $("#grph-link-2").hover(function () {
        $("#link-underline-2").css({
            "background-color": "#f4d500",
            "border-color": "#f4d500",
            "transition": "0.3s ease-in-out",
        })
    }, function () {
        $("#link-underline-2").css({
            "background-color": "#f46b5b",
            "border-color": "#f46b5b",
            "transition": "0.3s ease-in-out",
        })
    });

    $(".footer-links").hover(function (e) {
        let id = e.target.id;
        $("#" + id).css({
            "color": "white",
            "transition": "0.3s ease-in-out",
        });
    }, function (e) {
        let id = e.target.id;
        $("#" + id).css({
            "color": "#498d7e",
            "transition": "0.3s ease-in-out",
        });
    });

    $("#mobile-navbtn").click(function () {
        $("#navlist").slideToggle(500);
    });

    $("path").hover(function (e) {
        let id = e.target.id;
        $("#" + id).attr("fill", "white");

    }, function (e) {
        let id = e.target.id;
        $("#" + id).attr("fill", "#2C7566");

    });

});