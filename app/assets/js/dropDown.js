document.addEventListener("click", (e) => {
  let listElements = document.querySelectorAll(".list__button--click");

  console.log(listElements);
  const ifMatchCssClasses =
    match(e, ".nav__link") ||
    match(e, ".list__arrow") ||
    match(e, ".list__button--click");

  if (ifMatchCssClasses && match(e, ".repo_links")) {
    openCloseDrowpDown(listElements, 0);
  }

  if (ifMatchCssClasses && match(e, ".technologies")) {
    openCloseDrowpDown(listElements, 1);
  }

  if (ifMatchCssClasses && match(e, ".platforms")) {
    openCloseDrowpDown(listElements, 2);
  }

  if (ifMatchCssClasses && match(e, ".access-Data")) {
    openCloseDrowpDown(listElements, 3);
  }

  if (ifMatchCssClasses && match(e, ".members")) {
    openCloseDrowpDown(listElements, 4);
  }
});

function openCloseDrowpDown(listElements, index) {
  listElements[index].classList.toggle("arrow");

  let height = 0;
  let menu = listElements[index].nextElementSibling;
  if (menu.clientHeight == "0") {
    height = menu.scrollHeight;
    console.log(height);
  }

  menu.style.height = `${height}px`;
}

const match = (e, cssClass) => {
  return e.target.matches(cssClass);
};
