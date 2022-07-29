// console.log($);
// console.log('modal practice app.js is linked to this index.html');
$(() => {

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

// change background button
$('#button').click(function(){
     $('.body').toggleClass('body2')
});

// toggle between photos on click
// $(".tog").click(function(){
//     $('img',this).toggle()
// });

});