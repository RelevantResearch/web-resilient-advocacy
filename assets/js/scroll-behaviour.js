// Add class to navbar when scrolling
window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 50) {
    // Change the 50 value to whatever scroll threshold you want
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
