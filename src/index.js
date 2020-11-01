import { side_bar } from '../../side_bar/side_bar';

$(document).ready(function() {
    side_bar.display_side_bar();

    $('.immobilier').click(() => {
        $('#immobilier').slideToggle();
    });
    $('.emploi').click(() => {
        $('#emploi').slideToggle();
    });
    $('.vehicule').click(() => {
        $('#vehicule').slideToggle();
    });
    $('.service').click(() => {
        $('#service').slideToggle();
    });
    $('.cours').click(() => {
        $('#cours').slideToggle();
    });
    $('.animaux').click(() => {
        $('#animaux').slideToggle();
    });
    $('.plans').click(() => {
        $('#plans').slideToggle();
    });
    $('.rencontres').click(() => {
        $('#rencontres').slideToggle();
    });
});