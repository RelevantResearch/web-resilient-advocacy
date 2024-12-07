document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // Detect scroll and toggle the "scrolled" class
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active link handling
  const navLinks = document.querySelectorAll(
    ".nav-links a, .fullscreen-menu a"
  );

  function normalizePath(path) {
    return path.replace(/^\/|\/$/g, "").toLowerCase();
  }

  function updateActiveLink() {
    const currentPath = normalizePath(window.location.pathname);

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (normalizePath(link.getAttribute("href")) === currentPath) {
        link.classList.add("active");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", updateActiveLink);
  });

  updateActiveLink();
});
