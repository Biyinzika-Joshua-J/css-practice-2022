//faq toggle feature
const questionBody = document.querySelector('.qn');
const contentBody = document.querySelector('.content');
const cross = document.querySelector('.svg-icon-thin-x ');

const toggleQuestionBody = function(e){
    contentBody.classList.toggle('hide');
}

questionBody.addEventListener('click', toggleQuestionBody);
cross.addEventListener('click', toggleQuestionBody);

