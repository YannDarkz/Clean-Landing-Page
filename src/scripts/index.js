import clickArrow from './services/topClick.js'
import { toggleModoNoturno, modoDiurnoToggle, modoNoturnoToggle } from './services/noturnMod.js'

document.addEventListener('DOMContentLoaded', () => {
  modoNoturnoToggle.addEventListener('click', toggleModoNoturno);
  modoDiurnoToggle.addEventListener('click', toggleModoNoturno);

  clickArrow()
});

