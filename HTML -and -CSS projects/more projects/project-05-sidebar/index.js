const navEl = document.querySelector(".nav");

const toggleBtn = document.querySelector(".sidebar-toggle");

const sidebarEl = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

toggleBtn.addEventListener("click", () => {
  navEl.classList.add("hide-nav");
  sidebarEl.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  navEl.classList.remove("hide-nav");
  sidebarEl.classList.remove("show-sidebar");
});
