const tabItem = document.querySelectorAll(".tab-item");

const tabPane = document.querySelectorAll(".tab-pane");

const tableContent = document.querySelector(".tab-content");

tabItem.forEach(function (items, index) {
  items.onclick = function () {
    const tabItemActive = document.querySelector(".tab-item.active");
    var paneActive = document.querySelector(".tab-pane.active");
    paneActive.classList.remove("active");
    tabItemActive.classList.remove("active");
    items.classList.add("active");

    tabPane[index].classList.add("active");
  };
});
