window.addEventListener("load", function () {
  var hamburger = this.document.querySelector(".hamburger");
  var nav = document.querySelectorAll(".nav-items-container");

  // navbar
  hamburger.addEventListener("click", (e) => {
    nav.forEach((element) => {
      element.classList.toggle("active-menu");
      console.log(element);
    });
  });
});
