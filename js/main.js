
const templateArray = document.querySelectorAll(`template`);
const mainElement = document.querySelector(`#main`);

const chooseTemplate = (currentTemplateNumber) => {
  const shadow = document.createElement(`div`);
  const content = templateArray[currentTemplateNumber].content.cloneNode(true);
  shadow.appendChild(content);
  mainElement.appendChild(shadow);
  return shadow.cloneNode(true);
}

chooseTemplate(2);

const arrowWrapper = document.createElement(`div`);
arrowWrapper.className = `arrows__wrap`;
document.body.appendChild(arrowWrapper);


const buttonSwitchPrev = document.createElement(`button`);
const buttonSwitchNext = document.createElement(`button`);
arrowWrapper.appendChild(buttonSwitchPrev);
arrowWrapper.appendChild(buttonSwitchNext);

const arrowLeft = document.createTextNode(`<-`);
const arrowRight = document.createTextNode(`->`);
buttonSwitchPrev.appendChild(arrowLeft);
buttonSwitchNext.appendChild(arrowRight);
buttonSwitchNext.className = `arrows__btn`;
buttonSwitchPrev.className = `arrows__btn`;

//
// function chooseTemplate(templateNumber) {
//   const templateUsed = document.querySelector(`#${templatesArray[templateNumber]}`);
//   const clone = document.importNode(templateUsed.content, true);
//   document.body.querySelector(`#main`).appendChild(clone);
// }
//
//
// chooseTemplate(2);
//
// document.addEventListener(`keydown`, screen);
//
// function screen(e) {
//   const keyCode = e.key;
//   if (keyCode === 39) {
//     chooseTemplate(templateNumber + 1);
//   } else if ((keyCode === 37)) {
//     chooseTemplate(templateNumber - 1);
//   }
// }

