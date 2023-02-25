$(function() {


    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    // Actives the Reservation button JS Test

    const reserveButton = document.getElementById('reserveButton');

    function activateReservationModule() {
        $('#reserveModal').modal()
    }

    reserveButton.addEventListener('click', activateReservationModule);

    // Activates the Login button with JQuery

    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
        });
});




