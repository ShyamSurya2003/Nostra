document.getElementById("offer-close").onclick = function () {
  document.querySelector(".offer-bar").style.display = "none";
};

let slider = document.querySelector(".slider-image-container");
let index = 0;

document.getElementById("slider-right-activate").onclick = function () {
  index++;

  if (index > 2) index = 0;

  slider.style.transform = "translateX(-" + index * 100 + "vw)";
};

document.getElementById("slider-left-activate").onclick = function () {
  index--;

  if (index < 0) index = 2;

  slider.style.transform = "translateX(-" + index * 100 + "vw)";
};

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
  });
