const scrollArrow = document.getElementById('scrollArrow');
const logoFooter = document.getElementById('logoFooter');

const clickArrow = () => {

  scrollArrow.addEventListener('click', scrollToTop);
  logoFooter.addEventListener('click', scrollToTop);

  scrollArrow.addEventListener('click', () => {
    scrollToTop();
  });

  window.addEventListener("scroll", () => {
    const halfPage = window.innerHeight / 0.8;  

    if (window.scrollY > halfPage) {
      scrollArrow.classList.add("mostrar");
    } else {
      scrollArrow.classList.remove("mostrar");
    }

    console.log("innerHeight", window.innerHeight )
    console.log("scrollY", window.scrollY )
    console.log("offsetHeight", document.body.offsetHeight )
    // Esconde a seta no final da página
    if (window.innerHeight + Math.ceil(window.scrollY) >= document.body.offsetHeight - 300) {
      scrollArrow.classList.remove("mostrar");
    }
  });
}

const scrollToTop = () => {
  const scrollDuration = 1000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

export default clickArrow