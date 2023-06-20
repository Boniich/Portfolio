document.addEventListener("click", (e) => {
  targetPressButton2(e);
});

function targetPressButton2(e) {
  const frontEnd = document.querySelector(".grid-fluid");
  const backEnd = document.querySelector(".grid-fluid-2");

  const aboutMeBtns = document.querySelectorAll(".projects-buttons");

  const targetFrontEndBtn =
    e.target.matches("#frontend-btn") && !e.target.matches(".active");

  const targetBackEndBtn =
    e.target.matches("#backend-btn") && !e.target.matches(".active");

  if (targetFrontEndBtn) {
    clickOnFirstButton(aboutMeBtns, frontEnd, backEnd);
  }

  if (targetBackEndBtn) {
    clickOnSecondButton(aboutMeBtns, frontEnd, backEnd);
  }
}

function clickOnFirstButton(aboutMeBtns, frontEnd, backEnd) {
  backEnd.classList.remove("show");
  frontEnd.classList.remove("hidden");
  frontEnd.classList.add("show");
  aboutMeBtns[0].classList.add("active");
  aboutMeBtns[1].classList.remove("active");
}

function clickOnSecondButton(aboutMeBtns, frontEnd, backEnd) {
  frontEnd.classList.add("hidden");
  backEnd.classList.add("show");
  aboutMeBtns[0].classList.remove("active");
  aboutMeBtns[1].classList.add("active");
}
