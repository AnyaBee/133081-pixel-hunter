
// const getElementFromTemplate = (templateString) => {
//   const shadow = document.createElement(`div`);
//   const mainElement = document.querySelector(`#main`);
//   const content = templateString.content.cloneNode(true);
//   shadow.appendChild(content);
//   const result = shadow.cloneNode(true);
//   mainElement.innerHTML = ``;
//   mainElement.appendChild(result);
//   return result;
// };


function getElementFromTemplate(templateString) {
  const templateUsed = document.querySelector(`${templateString}`);
  const clone = document.importNode(templateUsed.content, true);
  document.body.querySelector(`#main`).appendChild(clone);
}

export default getElementFromTemplate();
