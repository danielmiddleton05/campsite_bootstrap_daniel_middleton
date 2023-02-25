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
});
// Actives the Reservation button
const reserveButton = document.getElementById('reserveButton');

function activateReservationModule() {
    $('#reserveModal').modal()
}

reserveButton.addEventListener('click', activateReservationModule);
// Actives the Login button
const loginButton = document.getElementById('loginButton');

function activateLoginModule() {
    $('#loginModal').modal()
}

loginButton.addEventListener('click', activateLoginModule);