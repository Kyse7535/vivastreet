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

    $('.categorie_immobilier,.list_items_immobilier').hover(function() {
        $('.list_items_immobilier').toggleClass('deroulant');
    });
    $('.categorie_emploi, .list_items_emploi').hover(function() {
        $('.list_items_emploi').toggleClass('deroulant');
    });
    $('.categorie_vehicule, .list_items_vehicule').hover(function() {
        $('.list_items_vehicule').toggleClass('deroulant');
    });
    $('.categorie_services, .list_items_services').hover(function() {
        $('.list_items_services').toggleClass('deroulant');
    });
    $('.categorie_cours, .list_items_cours').hover(function() {
        $('.list_items_cours').toggleClass('deroulant');
    });
    $('.categorie_animaux, .list_items_animaux').hover(function() {
        $('.list_items_animaux').toggleClass('deroulant');
    });
    $('.categorie_plans, .list_items_plans').hover(function() {
        $('.list_items_plans').toggleClass('deroulant');
    });
    $('.categorie_rencontres, .list_items_rencontres').hover(function() {
        $('.list_items_rencontres').toggleClass('deroulant');
    });


});