$(document).ready(function() {
    $(".1").click(function() {
        $(".mobile").show();
        $(".menu").hide();
        $(".credit").hide();
        $(".contact").hide();
        $(".pause").hide();
        console.log("c'est good");
    });
    $(".2").click(function() {
        $(".mobile").hide();
        $(".menu").hide();
        $(".tutoriel").show();
        $(".credit").hide();
        $(".pause").hide();
        console.log("ça passe");
    });
    $(".3").click(function() {
        $(".credit").show();
        $(".mobile").hide();
        $(".menu").hide();
        $(".tutoriel").hide();
        $(".pause").hide();
        console.log("ça passe");
    });
    $('#pause').click(function() {
        $(".pause").show();
        $(".menu").hide();
        $(".credit").hide();
        $(".mobile").hide();
        $(".tutoriel").hide();
    });
    $('.4').click(function() {
        $(".menu").show();
        $(".pause").hide();
        $(".credit").hide();
        $(".mobile").hide();
        $(".tutoriel").hide();
    });
});