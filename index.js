////--------------------Bookmark --------------------

const bookmarkButton = document.querySelector('[js-data="bookmark"]');

function handleBookmarkButtonClick(event) {
  const clickedBookmark = event.target;

  clickedBookmark.classList.toggle("bookmark--active");
}

bookmarkButton.addEventListener("click", handleBookmarkButtonClick);

// Erfolgreicher Versuch querySelectorAll
// const bookmarkButtons = document.querySelectorAll(".bookmark");

// function handleBookmarkButtonClick(event) {
//   const clickedBookmark = event.currentTarget;

//   clickedBookmark.classList.toggle("bookmark--active");
// }

// bookmarkButtons.forEach((bookmarkButton) => {
//   bookmarkButton.addEventListener("click", handleBookmarkButtonClick);
// });

// const answer = document.querySelector("p");
// const answerButton = document.querySelector('[js-data="answer-button"]');

// function handleAnswerButtonClick(event) {
//   const clickedAnswerButton = event.target;

//   clickedAnswerButton.classList.toggle("card__answer--active");
// }

// answerButton.addEventListener("click", handleAnswerButtonClick);

////--------------------Answer--------------------

const answer = document.querySelector("p");
const answerButton = document.querySelector('[js-data="answer-button"]');

function handleAnswerButtonClick(event) {
  answer.classList.toggle("card__answer--active");
}

answerButton.addEventListener("click", handleAnswerButtonClick);
