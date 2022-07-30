scroll();

function scroll() {
  addEventListener("scroll", () => {
    const cssClassToChangeNavColor = "change-color-nav";
    const cssClassChangeColorBarNav = "changeColorIcon";
    const cssClassChangeColorBrandSign = "changeBrandSign";
    const nav = document.querySelector(".nav");
    const navList = document.querySelector(".navList");
    const navBar = document.querySelector(".icon");
    const startBrandSign = document.querySelector(".startBrandSign");
    const brandName = document.querySelector(".brandName");
    const endBrandSign = document.querySelector(".endBrandSign");
    let position = window.pageYOffset;
    if (position >= 500) {
      nav.classList.add(cssClassToChangeNavColor);
      navList.classList.add(cssClassToChangeNavColor);
      navBar.classList.add(cssClassChangeColorBarNav);
      startBrandSign.classList.add(cssClassChangeColorBrandSign);
      endBrandSign.classList.add(cssClassChangeColorBrandSign);
      brandName.classList.add(cssClassChangeColorBrandSign);
    } else {
      nav.classList.remove(cssClassToChangeNavColor);
      navList.classList.remove(cssClassToChangeNavColor);
      navBar.classList.remove(cssClassChangeColorBarNav);
      startBrandSign.classList.remove(cssClassChangeColorBrandSign);
      endBrandSign.classList.remove(cssClassChangeColorBrandSign);
      brandName.classList.remove(cssClassChangeColorBrandSign);
    }
  });
}
