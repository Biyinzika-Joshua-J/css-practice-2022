//faq toggle feature
const questionBody = document.querySelectorAll(".qn");
const contentBody = document.querySelectorAll(".content");
const cross = document.querySelectorAll(".svg-icon-thin-x ");

questionBody.forEach((question, index) => {
  question.addEventListener("click", function (e) {
    cross[index].classList.toggle("svg-closed");
    contentBody[index].classList.toggle("hide");
  });
});
