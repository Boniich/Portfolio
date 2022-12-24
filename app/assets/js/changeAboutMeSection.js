document.addEventListener("click", (e) => {
  const aboutMeIntro = document.querySelector(".box-about-me-conteiner");
  const stacks = document.querySelector(".stacks-container");

  const aboutMeBtns = document.querySelectorAll(".about-me-stacks-buttons");

  if (e.target.matches("#about-me-btn")) {
    console.log(aboutMeIntro);
    stacks.classList.remove("show");
    aboutMeIntro.classList.remove("hidden");
    aboutMeIntro.classList.add("show");
    aboutMeBtns[0].classList.add("active");
    aboutMeBtns[1].classList.remove("active");
  }

  if (e.target.matches("#stacks-btn")) {
    console.log(stacks);
    aboutMeIntro.classList.add("hidden");
    stacks.classList.add("show");
    console.log(aboutMeBtns[1]);
    aboutMeBtns[0].classList.remove("active");
    aboutMeBtns[1].classList.add("active");
  }
});
