// phew… not a lot going on here. Please add some code!

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

// Versuch 1
// const bookmarkButtons = document.querySelector("bookmark");

// function handleBookmarkButtonClick(event) {
//   const clickedBookmark = event.currentTarget;

//   clickedBookmark.classList.toggle("bookmark--active");
// }

// bookmarkButtons.addEventListener("click", handleBookmarkButtonClick);

// Versuch 2
// const bookmarkButtons = document.getElementsByClassName("bookmark");

// function handleBookmarkButtonClick(event) {
//   const clickedBookmark = event.currentTarget;

//   clickedBookmark.classList.toggle("bookmark--active");
// }

// bookmarkButtons.addEventListener("click", handleBookmarkButtonClick);

// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("bookmark")) {
//     handleBookmarkButtonClick(event);
//   }
// });
