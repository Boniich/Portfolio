import { buttons } from "../../../helpers/buttons.js";
import { getProyects } from "../../../helpers/getProyects.js";

export function ProjectsIntroSection() {
  const $projectsIntroSection = document.createElement("section"),
    $projectTitle = document.createElement("h6"),
    $cardProjectBox = document.createElement("div"),
    $buttonsBox = document.createElement("div");

  // const of helper component buttons
  const textButton = "Mas Proyectos",
    urlButton = "#/proyectos";

  // css class
  $projectsIntroSection.id = "projectIntro-section";
  $projectsIntroSection.classList.add("conteiner");
  $projectsIntroSection.classList.add("proyects");
  $cardProjectBox.classList.add("button-conteiner");
  $buttonsBox.classList.add("button-conteiner");

  // title
  $projectTitle.classList.add("title-sections");
  $projectTitle.id = "proyectos-titulo";
  $projectTitle.innerHTML = "Web Developement";

  $projectsIntroSection.appendChild($projectTitle);

  // Set a special grid for card projects
  $cardProjectBox.classList.add("grid-fluid");

  // Call at ajax for show project cards
  getProyects($cardProjectBox);

  $buttonsBox.appendChild(buttons(urlButton, textButton));

  $projectsIntroSection.appendChild($cardProjectBox);
  $projectsIntroSection.appendChild($buttonsBox);

  return $projectsIntroSection;
}
