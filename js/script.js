// Toggle class active hamburger
const navbarNav = document.querySelector(".navbar-nav");

// toggle class active form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika search di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modul box

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.dislay = "none";
  e.preventDefault();
};

var polaroids = document.querySelectorAll(".polaroid");
polaroids.forEach((item) => {
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6);
  item.style.transform = `rotate(${randomRotation}deg)`;
});
