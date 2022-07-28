// console.log($);
// console.log('modal practice app.js is linked to this index.html');
$(() => {

// $hero=$('<h1>').text('Testing');
// $('#body').append($hero)

$("#bio").click(function() {
    $("#biography").fadeToggle();
});

$("#res").click(function() {
    $("#resume").fadeToggle();
});

$("#proj").click(function() {
    $("#projects").fadeToggle();
});

// let bg = [
//     "images/bernard-hermant-unsplash.jpg",
//     "images/jean-philippe-unsplash.jpg"
// ]

// $(".but1").click(function(){
//     body.css = bg.reverse()[0];
// });





});