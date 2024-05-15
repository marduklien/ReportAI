//import "./node_modules/@tabler/core/dist/js/tabler.min.js";

// import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
//import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/dropdown.js";

import "./node_modules/@tabler/core/dist/libs/nouislider/dist/nouislider.min.js";
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


document.addEventListener("DOMContentLoaded", (event) => {
  // Enable BS Tooltips 
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});
