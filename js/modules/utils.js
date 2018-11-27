// import greetingScreenElement from "./greeting";

const getElementFromTemplate = (templateString) => {
  const newDivWrapper = document.createElement(`div`);
  newDivWrapper.innerHTML = templateString;
  return newDivWrapper;
};

const mainElement = document.querySelector(`#main`);

const changeScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

// const buttonSelector = window.querySelector(`button.back`);
// buttonSelector.addEventListener(`click`, (e) => {
//   changeScreen(greetingScreenElement);
// });

export {getElementFromTemplate, changeScreen};
