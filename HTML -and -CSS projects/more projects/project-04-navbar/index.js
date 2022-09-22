const toggleBtn = document.querySelector(".nav-toggle");

const linkShow = document.querySelector(".links");

const activeLink = document.querySelectorAll(".link");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("rotate");
  linkShow.classList.toggle("show-links");
});

activeLink.addEventListener("click", () => {
  activeLink.forEach(a => {
   activeLink.classList.toggle("active");
  });
});
