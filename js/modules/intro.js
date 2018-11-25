import getElementFromTemplate from './utils.js';

const introScreen = `
<template id="intro">
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
  </template>
`;

getElementFromTemplate(introScreen);

export default introScreen;

