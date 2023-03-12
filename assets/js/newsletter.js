const input = document.querySelectorAll(".input");
const label = document.querySelectorAll(".label");
const textarea = document.querySelector("textarea");
const textareaLabel = document.querySelector(".form-text > label");
const optional = document.querySelector('span.optional');

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", () => {
    label[i].style.visibility = "visible";
  });

  input[i].addEventListener("blur", () => {
    label[i].style.visibility = "hidden";
  });
}

textarea.addEventListener("focus", () => {
	textareaLabel.style.visibility = "visible";
	optional.style.display = "none"
});

textarea.addEventListener("blur", () => {
	textareaLabel.style.visibility = "hidden";
	optional.style.display = "block";
});