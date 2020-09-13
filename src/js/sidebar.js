import { addShowToggling } from "./shared";

var sidebar = document.querySelector(".sidebar");
var burgerBtn = document.querySelectorAll(".header__burger-btn");
var closeBtn = sidebar.querySelector(".header-menu__close");
var page = document.querySelector(".page");

addShowToggling(burgerBtn, closeBtn, sidebar, "sidebar", page);
