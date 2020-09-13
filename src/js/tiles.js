import { brandsData, devicesData, servicesData } from "./data";
import { createTilesList } from "./shared";

var typesTilesLists = [
  {
    rootSelector: ".section--type_brands",
    itemTemplate: "#brand-template",
    data: brandsData,
    type: "brands",
  },
  {
    rootSelector: ".section--type_devices",
    itemTemplate: "#device-template",
    data: devicesData,
    type: "devices",
  },
  {
    rootSelector: ".section--type_services",
    itemTemplate: "#service-template",
    data: servicesData,
    type: "services",
  },
];

for (var i = 0; i < typesTilesLists.length; i++) {
  createTilesList(typesTilesLists[i]);
}
