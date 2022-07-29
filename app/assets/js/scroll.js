scroll();

function scroll() {
  addEventListener("scroll", () => {
    const cssClassToChangeNavColor = "change-color-nav";
    const nav = document.querySelector(".nav");
    const navList = document.querySelector(".navList");
    let position = window.pageYOffset;
    if (position >= 500) {
      nav.classList.add(cssClassToChangeNavColor);
      navList.classList.add(cssClassToChangeNavColor);
    } else {
      nav.classList.remove(cssClassToChangeNavColor);
      navList.classList.remove(cssClassToChangeNavColor);
    }
  });
}
