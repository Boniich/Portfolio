import { getProyects } from "../../../helpers/getProyects.js";

export function ProjectsIntroSection(nameSection) {
  const $projectsIntroSection = document.createElement("section"),
    $projectTitle = document.createElement("h6"),
    $frontEndBox = document.createElement("div"),
    $backEndBox = document.createElement("div");
  const urlSection = nameSection;
  let $addButtons = false;
  let frontEnd = null;
  let backEnd = null;

  // css class

  if (nameSection == "Game Developement") {
    $projectsIntroSection.id = "game-dev";
    $projectTitle.innerHTML = `<i  class="fa-solid fa-gamepad title-section-icon"></i> ${nameSection}`;
  }

  if (nameSection == "Desktop Developement") {
    $projectsIntroSection.id = "desktop-dev";
    $projectTitle.innerHTML = `<i  class="fa-solid fa-display title-section-icon"></i> ${nameSection}`;
  }

  if (nameSection == "Web Developement") {
    $projectsIntroSection.id = "web-dev";
    $projectTitle.innerHTML = `<i  class="fa-solid fa-globe title-section-icon"></i> ${nameSection}`;
    $addButtons = true;
    frontEnd = "front";
    backEnd = "back";
  }

  $projectsIntroSection.classList.add("conteiner");
  $projectsIntroSection.classList.add("proyects");
  $frontEndBox.classList.add("button-conteiner");
  $backEndBox.classList.add("button-conteiner-2");

  // title
  $projectTitle.classList.add("title-sections");
  $projectTitle.id = "proyectos-titulo";

  $projectsIntroSection.appendChild($projectTitle);
  $addButtons && $projectsIntroSection.appendChild(ProjectButtons());

  // Set a special grid for card projects
  $frontEndBox.classList.add("grid-fluid");
  $addButtons && $backEndBox.classList.add("grid-fluid-2");

  // Call at ajax for show project cards
  getProyects($frontEndBox, urlSection, frontEnd);
  $addButtons && getProyects($backEndBox, urlSection, backEnd);

  $projectsIntroSection.appendChild($frontEndBox);
  $addButtons && $projectsIntroSection.appendChild($backEndBox);

  return $projectsIntroSection;
}

function ProjectButtons() {
  const buttonContainer = document.createElement("div"),
    $firstButton = document.createElement("p"),
    $secondButton = document.createElement("p"),
    $thirdButton = document.createElement("p");

  $firstButton.innerHTML = "Frontend";
  $secondButton.innerHTML = "Backend";

  buttonContainer.classList.add("about-me-container");
  $firstButton.classList.add("projects-buttons", "active");
  $secondButton.classList.add("projects-buttons");

  $firstButton.id = "frontend-btn";
  $secondButton.id = "backend-btn";

  buttonContainer.appendChild($firstButton);
  buttonContainer.appendChild($secondButton);

  return buttonContainer;
}
