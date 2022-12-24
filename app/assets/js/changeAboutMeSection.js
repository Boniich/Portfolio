document.addEventListener("click", (e) => {
  targetPressButton(e);
});

function targetPressButton(e) {
  const aboutMeIntro = document.querySelector(".box-about-me-conteiner");
  const stacks = document.querySelector(".stacks-container");

  const aboutMeBtns = document.querySelectorAll(".about-me-stacks-buttons");

  const targetAboutMeBtn =
    e.target.matches("#about-me-btn") && !e.target.matches(".active");

  const targetStackBtn =
    e.target.matches("#stacks-btn") && !e.target.matches(".active");

  if (targetAboutMeBtn) {
    clickOnAboutMeBtn(aboutMeBtns, aboutMeIntro, stacks);
  }

  if (targetStackBtn) {
    clickOnStacksBtn(aboutMeBtns, aboutMeIntro, stacks);
  }
}

function clickOnAboutMeBtn(aboutMeBtns, aboutMeIntro, stacks) {
  stacks.classList.remove("show");
  aboutMeIntro.classList.remove("hidden");
  aboutMeIntro.classList.add("show");
  aboutMeBtns[0].classList.add("active");
  aboutMeBtns[1].classList.remove("active");
}

function clickOnStacksBtn(aboutMeBtns, aboutMeIntro, stacks) {
  aboutMeIntro.classList.add("hidden");
  stacks.classList.add("show");
  aboutMeBtns[0].classList.remove("active");
  aboutMeBtns[1].classList.add("active");
}
