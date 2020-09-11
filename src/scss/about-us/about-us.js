import { toggleShowing } from "../../js/shared";

console.log("sdfsdf");

var rootElement = document.querySelector(".about-us");
var content = rootElement.querySelector(".about-us__text-container-inner");
var btnToggle = rootElement.querySelector(".toggle-btn");

btnToggle.addEventListener("click", function () {
  if (!this.classList.contains("toggle-btn--show")) {
    toggleShowing(this, "Скрыть", content, "about-us__text-container-inner");
  } else {
    toggleShowing(
      this,
      "Читать далее",
      content,
      "about-us__text-container-inner"
    );
  }
});
