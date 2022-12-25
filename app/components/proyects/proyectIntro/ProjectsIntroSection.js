import { getProyects } from "../../../helpers/getProyects.js";

export function ProjectsIntroSection(nameSection) {
  const $projectsIntroSection = document.createElement("section"),
    $projectTitle = document.createElement("h6"),
    $cardProjectBox = document.createElement("div");

  const urlSection = nameSection;
  const gameIcon = "fa-solid fa-gamepad";
  const webIcon = "fa-solid fa-globe";

  // css class

  if (nameSection == "Game Developement") {
    $projectsIntroSection.id = "game-dev";
    $projectTitle.innerHTML = `<i  class="fa-solid fa-gamepad title-section-icon"></i> ${nameSection}`;
  } else {
    $projectsIntroSection.id = "web-dev";
    $projectTitle.innerHTML = `<i  class="fa-solid fa-globe title-section-icon"></i> ${nameSection}`;
  }

  $projectsIntroSection.classList.add("conteiner");
  $projectsIntroSection.classList.add("proyects");
  $cardProjectBox.classList.add("button-conteiner");

  // title
  $projectTitle.classList.add("title-sections");
  $projectTitle.id = "proyectos-titulo";

  $projectsIntroSection.appendChild($projectTitle);

  // Set a special grid for card projects
  $cardProjectBox.classList.add("grid-fluid");

  // Call at ajax for show project cards
  getProyects($cardProjectBox, urlSection);

  $projectsIntroSection.appendChild($cardProjectBox);

  return $projectsIntroSection;
}
