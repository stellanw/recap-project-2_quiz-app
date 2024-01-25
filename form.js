function handleSubmitButtonClick(event) {
  document.body.append(newCardListItem);
}

// newCardListItem.addEventListener("submit", handleSubmitButtonClick);

function createNewCard(data) {
  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const question = document.createElement("h2");
  question.classList.add("card__question");
  question.textContent = data.question; //VERKNÜPFUNG TEXTAREA RICHTIG???

  //   const cardButton = document.createElement("button");
  //   cardButton.classList.add("card__button-answer");

  //   const answer = document.createElement("p");
  //   answer.classList.add("card__answer");
  //   //   answer.textContent = textarea("new-answer");

  //   const cardTagList = document.createElement("ul");
  //   cardTagList.classList.add("card__tag-list");

  //   const cardTagListItem = document.createElement("li");
  //   cardTagListItem.classList.add("card__tag-list-item");

  //   const cardButtonBookmark = document.createElement("div");
  //   cardButtonBookmark.classList.add("card__button-bookmark");

  //   const bookmark = document.createElement("button");
  //   bookmark.classList.add("bookmark");

  //   const bookmarkIcon = document.createElement("svg");
  //   bookmarkIcon.classList.add("bookmark__icon");
  cardListItem.append(card, question);
  document.body.append(cardListItem);
}

createNewCard({ question: "Wer wird Millionär?" });
