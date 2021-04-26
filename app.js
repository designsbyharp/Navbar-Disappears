let navbarScroll = function () {
  // DOm element(s)
  const header = document.querySelector("header");

  // variables to use, for storing scroll data
  let prevScrollPos = 0;
  let currentScrollPosition;

  // Toggle Navbar with scroll y position(s)
  // check if user scrolled, if so add .scroll
  // else remove .scroll
  function toggleNavbar() {
    currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > prevScrollPos) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }

    prevScrollPos = currentScrollPosition;
  }

  // Window.onscroll - call toggleNavbar()
  window.onscroll = function () {
    toggleNavbar();
  };
};

// Invoke code
navbarScroll();
