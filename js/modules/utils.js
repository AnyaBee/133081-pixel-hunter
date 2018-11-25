// функция показа экрана
const getElementFromTemplate = (templateString) => {
  const newDivWrapper = document.createElement(`div`);
  newDivWrapper.innerHTML = templateString;
  return newDivWrapper;
};

const mainElement = document.querySelector(`#main`);

// функция смены экрана
const changeScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

export {getElementFromTemplate, changeScreen};
