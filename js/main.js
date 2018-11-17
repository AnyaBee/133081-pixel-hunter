const templatesArray = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`, `modal-error`, `modal-confirm`];

function chooseTemplate(templateNumber) {
  const templateUsed = document.querySelector(`#${templatesArray[templateNumber]}`);
  const clone = document.importNode(templateUsed.content, true);
  document.body.querySelector(`#main`).appendChild(clone);
}

chooseTemplate(4);
console.log(chooseTemplate(1));
