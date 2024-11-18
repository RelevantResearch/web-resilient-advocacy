const navbar = document.querySelector(".navbar");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled"); // Add 'scrolled' class when content overlaps
  } else {
    navbar.classList.remove("scrolled"); // Remove 'scrolled' class when at the top
  }
});
