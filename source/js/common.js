/**
 * Created by Nihrom on 22.06.2017.
 */
$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    /* ---------------------------Use: Nav auto hide jQuery----------------------- */
    
    jQuery(window).scroll(function() {
        if ($(window).scrollTop() >= jQuery(".hero").height() - 75) {
            $('.navbar').removeClass('top');
            $('.navbar').addClass('bottom');
        } else {
            $('.navbar ').addClass('top');
            $('.navbar ').removeClass('bottom');
        }
    });

    function openOffer() {
        $('#offerModal').modal('show');
    }

    setTimeout(openOffer, 3000);
});