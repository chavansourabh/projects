const openBtn = document.querySelector(".btn");

const closeBtn = document.querySelector(".close-btn");

const modalSwitch = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", () => {
  modalSwitch.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
  modalSwitch.classList.remove("open-modal");
});

