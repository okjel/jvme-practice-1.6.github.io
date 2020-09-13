import { addShowToggling } from "./shared";

var page = document.querySelector(".page");
var modals = ["chat", "call"];

for (var i = 0; i < modals.length; i++) {
  var modal = document.querySelector(".modal--type_" + modals[i]);
  var showBtns = document.querySelectorAll(".btn--theme_" + modals[i]);
  var closeBtn = modal.querySelector(".modal__close");

  addShowToggling(showBtns, closeBtn, modal, "modal", page);
}
