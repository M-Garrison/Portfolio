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

let currentImgIndex = 0
let numOfImages = $('.family-images').children().length-1

$('.next').on('click',()=>{
    $('.family-images').children().eq(currentImgIndex).css('display','none')
   
    if(currentImgIndex < numOfImages) {
        currentImgIndex ++
       } else {currentImgIndex = 0}

    $('.family-images').children().eq(currentImgIndex).css('display','block')
});

$('.previous').on('click',()=>{
    $('.family-images').children().eq(currentImgIndex).css('display','none')
   
    if(currentImgIndex > 0) {
        currentImgIndex --
       } else {currentImgIndex = numOfImages}

    $('.family-images').children().eq(currentImgIndex).css('display','block')
});
// attempt at the button below
let bg = [
    "images/bernard-hermant-unsplash.jpg",
    "images/jean-philippe-unsplash.jpg"
]

// $(".but1").click(function(){
//     body.css = bg.reverse()[0];
// });

$('.button').on('click',()=>{
    $('#body').css("background-image", "url(../portfolio/images/bernard-hermant-unsplash.jpg)")
})

// $('.button').click(function(){
//     $("body").toggleClass(function(){
//       return "body2";
//     });
//   });

// $('button').click(function(){
//     $('#body').toggleClass('#body2');
// });


// toggle between photos on click
$(".tog").click(function(){
    $('img',this).toggle()
});

});