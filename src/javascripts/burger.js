const burger = document.getElementById("burger");
const mobileMenuEl = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    document.querySelector("html").classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
    mobileMenuEl.classList.remove("active");
  } else {
    burger.classList.add("active");
    document.querySelector("html").classList.add("no-scroll");
    document.body.classList.add("no-scroll");
    mobileMenuEl.classList.add("active");
  }
});
