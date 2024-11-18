const hamburger = document.getElementById("hamburger");
const fullscreenMenu = document.getElementById("fullscreenMenu");
const closeMenu = document.getElementById("closeMenu");

// Open the fullscreen menu
hamburger.addEventListener("click", () => {
  fullscreenMenu.classList.add("active");
});

// Close the fullscreen menu
closeMenu.addEventListener("click", () => {
  fullscreenMenu.classList.remove("active");
});

// Close the menu when clicking outside (optional)
document.addEventListener("click", (e) => {
  if (!fullscreenMenu.contains(e.target) && !hamburger.contains(e.target)) {
    fullscreenMenu.classList.remove("active");
  }
});
