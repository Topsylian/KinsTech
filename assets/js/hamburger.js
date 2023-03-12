const hamburger = document.querySelector("#hamburger");
const first = document.querySelector("#hamburger > div.first-stick");
const second = document.querySelector("#hamburger > div.second-stick");
const third = document.querySelector("#hamburger > div.third-stick");
const hamburgerLink = document.querySelector("nav.hamburger-link");
const hamburgerLinks = document.querySelectorAll("nav.hamburger-link > nav");

hamburger.addEventListener("click", () => {
  if (third.style.display === "none") {
    first.classList.remove("active");
    second.classList.remove("active");
    third.style.display = "block";
    hamburgerLink.style.display = "none";
  } else {
    first.classList.add("active");
    second.classList.add("active");
    third.style.display = "none";
    hamburgerLink.style.display = "flex";
  }
});

for (let i = 0; i < hamburgerLinks.length; i++) {
  setTimeout(() => {
    hamburgerLinks[i].addEventListener("click", () => {
      first.classList.remove("active");
      second.classList.remove("active");
      third.style.display = "block";
      hamburgerLink.style.display = "none";
    });
  }, 100);
}
