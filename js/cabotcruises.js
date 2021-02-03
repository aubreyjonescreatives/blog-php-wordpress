/*jslint node:true*/
"use strict";

/*global alert*/


function toggleMenu() {
  document.getElementById("primaryNav").classList; 
  document.getElementById("primaryNav").classList.toggle('hide');
}



function toggleMenu2() {
  document.getElementById("secondaryNav").classList.toggle; 
  document.getElementById("secondaryNav").classList.toggle('parent');
}



$(document).ready(function(){
  $('.my-class').slick({
   slidesToShow: 1, 
   autoplay: true, 
   autoplaySpeed: 50000,
   dots: true, 
   arrows: false
  });
});


$('.single-item').slick();