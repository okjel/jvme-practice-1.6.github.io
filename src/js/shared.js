function toggleShowing(btn, btnText, content, contentClass) {
  btn.textContent = btnText;
  console.log(btnText);
  btn.classList.toggle("toggle-btn--show");
  content.classList.toggle(contentClass + "--show");
}

function inflateList(data, template, inflatedList, type) {
  for (var i = 0; i < data.length; i++) {
    var clonedElement = template.cloneNode(true);
    switch (type) {
      case "brands":
        var clonedElementImg = clonedElement.querySelector(".tile__img");
        clonedElementImg.src = data[i];
        break;
      case "devices":
        var clonedElementTitle = clonedElement.querySelector(".tile__title");
        clonedElementTitle.textContent = data[i];
        break;
      case "services":
        var clonedElementName = clonedElement.querySelector(
          ".tile__text--type_name"
        );
        clonedElementName.textContent = data[i].name;
        var clonedElementPrice = clonedElement.querySelector(
          ".tile__text--type_price"
        );
        clonedElementPrice.textContent = data[i].price;
        var clonedElementTime = clonedElement.querySelector(
          ".tile__text--type_time"
        );
        clonedElementTime.textContent = data[i].time;
        break;
      default:
        console.log("type", type);
        console.log("data", data);
        throw "Wrong tile type";
    }
    inflatedList.appendChild(clonedElement);
  }
}

function toggleListener(btn, list) {
  btn.addEventListener("click", function () {
    if (!this.classList.contains("toggle-btn--show")) {
      toggleShowing(this, "Скрыть", list, "tiles");
    } else {
      toggleShowing(this, "Показать все", list, "tiles");
    }
  });
}

function createTilesList(tilesList) {
  var section = document.querySelector(tilesList.rootSelector);
  var list = section.querySelector(".tiles");
  var itemTemplate = document
    .querySelector(tilesList.itemTemplate)
    .content.querySelector(".tile");

  var btnToggle = section.querySelector(".toggle-btn");

  inflateList(tilesList.data, itemTemplate, list, tilesList.type);
  if (btnToggle !== null) {
    toggleListener(btnToggle, list);
  }
}

function createTilesListSwiper(tilesList) {
  var section = document.querySelector(tilesList.rootSelector);
  var list = section.querySelector(".swiper-wrapper");
  var itemTemplate = document
    .querySelector(tilesList.itemTemplate)
    .content.querySelector(".swiper-slide");

  inflateList(tilesList.data, itemTemplate, list, tilesList.type);
}

/* MODAL */

function toggleShowingModal(el, elType, page) {
  el.classList.toggle(elType + "--show");
  page.classList.toggle("page--lock");
}

function addShowToggling(showBtns, closeBtn, elem, elemType, page) {
  for (var i = 0; i < showBtns.length; i++) {
    showBtns[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      toggleShowingModal(elem, elemType, page);
    });
  }

  closeBtn.addEventListener("click", function () {
    toggleShowingModal(elem, elemType, page);
  });

  elem.addEventListener("click", function (evt) {
    if (!evt.target.closest(`.${elemType}__container`)) {
      toggleShowingModal(elem, elemType, page);
    }
  });
}

export {
  toggleShowing,
  createTilesList,
  createTilesListSwiper,
  toggleShowingModal,
  addShowToggling,
};
