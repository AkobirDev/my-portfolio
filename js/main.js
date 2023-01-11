//  Bar
const navigation = document.querySelector("header nav ul");
const bar = document.querySelector(".fa-bars");
bar.addEventListener("click", function () {
  navigation.classList.toggle("active");
  // bar.toggleClass("active");
});

//    Navbar Effect

const header = document.querySelector("#header");
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 668) {
    header.classList.add("header-white");
  } else {
    header.classList.remove("header-white");
  }
});

// auto typing

let txt = document.querySelector(".auto-effect-1");
let words = [
  "Developer.",
  "not Freelancer.",
  "not Designer.",
  "Alhamdulillah, Muslim.",
];
let wordIndex = 0;
let letterIndex = 0;

function typing() {
  if (letterIndex < words[wordIndex].length) {
    txt.innerHTML += words[wordIndex].charAt(letterIndex++);
    setTimeout(typing, 200);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (letterIndex > 0) {
    txt.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, 100);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(typing, 1000);
  }
}

typing();
document.addEventListener("DOMContentLoaded", () => {
  if (letterIndex.length) setTimeout(typing, 5000);
});
