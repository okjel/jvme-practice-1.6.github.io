import Swiper, { Pagination } from "swiper";
import { brandsData, devicesData, servicesData } from "./data";
import { createTilesListSwiper } from "./shared";

var swipers = [
  {
    rootSelector: ".section--type_brands",
    itemTemplate: "#brand-template-swiper",
    data: brandsData,
    type: "brands",
  },
  {
    rootSelector: ".section--type_devices",
    itemTemplate: "#device-template-swiper",
    data: devicesData,
    type: "devices",
  },
  {
    rootSelector: ".section--type_services",
    itemTemplate: "#service-template-swiper",
    data: servicesData,
    type: "services",
  },
];

if (document.documentElement.clientWidth <= 768) {
  Swiper.use([Pagination]);

  for (var i = 0; i < swipers.length; i++) {
    createTilesListSwiper(swipers[i]);

    var mySwiper = new Swiper(swipers[i].rootSelector + " .swiper", {
      width: 240,
      calculateHeight: true,
      spaceBetween: 16,
      // If we need pagination
      pagination: {
        el: swipers[i].rootSelector + " .swiper-pagination",
      },
    });
  }
}
