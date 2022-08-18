const header = document.querySelector("#header");
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 668) {
    header.classList.add("header-white");
  } else {
    header.classList.remove("header-white");
  }
});
