import "./assets/js/switch-icon.js";
import "./assets/js/dropdown.js";
// apexcharts
import "https://cdn.jsdelivr.net/npm/apexcharts";
import "./assets/js/charts.js";

import "./node_modules/@tabler/core/dist/libs/litepicker/dist/js/main.js";
import "./node_modules/@tabler/core/dist/libs/tom-select/dist/js/tom-select.complete.min.js";

import "./assets/scss/all.scss";


// Get the button
let mybutton = document.getElementById("backtop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 100;
  } else {
    mybutton.style.opacity = 0;
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){  
  $(".chatbubble__card").scrollTop($('.chatbubble__card')[0].scrollHeight);
})
