const templatesArray = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`, `modal-error`, `modal-confirm`];

function chooseTemplate(templateNumber) {
  const templateUsed = document.querySelector(`#${templatesArray[templateNumber]}`);
  const clone = document.importNode(templateUsed.content, true);
  document.body.querySelector(`#main`).appendChild(clone);
}


chooseTemplate(2);

document.addEventListener(`keydown`, screen);

function screen(e) {
  const keyCode = e.keyCode;
  if (keyCode === 39) {
    chooseTemplate(templateNumber + 1);
  } else if ((keyCode === 37)) {
    chooseTemplate(templateNumber - 1);
  }
}

