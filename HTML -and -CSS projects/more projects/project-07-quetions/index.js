//  traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (s) => {
//     const question = s.currentTarget.parentElement.parentElement;

//         question.classList.toggle("show-text");
//   });
// });

//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((que) => {
  const btn = que.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== que) {
        item.classList.remove("show-text");
      }
    });

    que.classList.toggle("show-text");
  });
});
