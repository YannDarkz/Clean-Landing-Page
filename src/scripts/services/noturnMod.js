const modoNoturnoToggle = document.getElementById('btnNoturno');
const modoDiurnoToggle = document.getElementById('btnDiurno')
const scrollArrow = document.getElementById("scrollArrow");

function toggleModoNoturno() {
    const corpo = document.body;
    const modoNoturnoAtivo = corpo.classList.contains('noturno');
    console.log(modoNoturnoAtivo)

    if (modoNoturnoAtivo) {
      modoNoturnoToggle.classList.remove('none')
      modoDiurnoToggle.classList.add('none')
      corpo.classList.add('diurno')
      corpo.classList.remove('noturno')
      scrollArrow.classList.remove('filter-invert')

    } else {
      modoNoturnoToggle.classList.add('none')
      modoDiurnoToggle.classList.remove('none')
      corpo.classList.add('noturno')
      corpo.classList.remove('diurno')
      scrollArrow.classList.add('filter-invert')
    }
  }

  export {toggleModoNoturno, modoDiurnoToggle, modoNoturnoToggle}