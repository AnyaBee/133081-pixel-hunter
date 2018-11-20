'use strict';

const templateArray = [
  `intro`,
  `greeting`,
  `rules`,
  `game-1`,
  `game-2`,
  `game-3`,
  `stats`
].map((id) => document.querySelector(`#${id}`));

// ок, мы берем все  айдишники темплейтов и собираем эти айдишники воедино.

const mainElement = document.querySelector(`#main`);

let currentTemplateNumber = 0;

const chooseTemplate = (screenNumber) => {
  if ((screenNumber < 0) || (screenNumber > templateArray.length - 1)) {
    return null; // может лучше иначе возвращать?
  }
  // зачем переопределили currentTemplateNumber на screenNumber? В чем смысл?
  // почему и что дает пустой return

  currentTemplateNumber = screenNumber; // в чем фишка?
  const shadow = document.createElement(`div`);
  const content = templateArray[currentTemplateNumber].content.cloneNode(true);
  shadow.appendChild(content);
  const result = shadow.cloneNode(true);
  mainElement.innerHTML = ``;
  mainElement.appendChild(result);
  return result;
};

chooseTemplate(currentTemplateNumber);

const arrowsButtons = document.createElement(`div`);
arrowsButtons.className = `arrows__wrap`;
arrowsButtons.innerHTML = `
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
`;
document.body.appendChild(arrowsButtons);

const navigationArrows = document.querySelectorAll(`.arrows__btn`);
navigationArrows[0].addEventListener(`click`, () => {
  chooseTemplate(currentTemplateNumber - 1);
});

navigationArrows[1].addEventListener(`click`, () => {
  chooseTemplate(currentTemplateNumber + 1);
});

const arrowHandler = (e) => {
  const keyCode = e.key;
  if (keyCode === 39) {
    chooseTemplate(currentTemplateNumber + 1);
  } else if ((keyCode === 37)) {
    chooseTemplate(currentTemplateNumber - 1);
  }
};

document.addEventListener(`keydown`, (e) => {
  arrowHandler(e);
});
