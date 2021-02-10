/*jslint node:true*/
"use strict";

/*global alert*/

const apiURL = "api.openweathermap.org/data/2.5/weather?zip=84058,us&appid=2f4dcd39f2b81b6e284a6acac29fcac9"



fetch ( apiURL) 
.then((mydata) => mydata.json())
.then((mydata) => {
  console.log(mydata); 
}); 





fetch ('./data/cabotcruises.json') 
.then((mydata) => mydata.json())
.then((mydata) => {
  console.log(mydata); 
}); 



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