import { buttons } from "../../../helpers/buttons.js";
import { getProyects } from "../../../helpers/getProyects.js";
import { printGrupalProjects } from "../printGrupalProjects/PrintGrupalProjects.js";

export function ProjectsIntroSection(typeProject) {
  const individualSectionTitle = "Proyectos individuales";
  const grupalSectionTitle = "Proyectos grupales";
  const $projectsIntroSection = document.createElement("section"),
    $projectTitle = document.createElement("h6"),
    $cardProjectBox = document.createElement("div"),
    $buttonsBox = document.createElement("div");

  // const of helper component buttons
  // const textButton = "Mas Proyectos",
  //   urlButton = "#/proyectos";

  // css class

  $projectsIntroSection.classList.add("conteiner");
  $projectsIntroSection.classList.add("proyects");
  $cardProjectBox.classList.add("button-conteiner");
  $buttonsBox.classList.add("button-conteiner");

  // title
  $projectTitle.classList.add("title-sections");
  $projectTitle.id = "proyectos-titulo";

  // Set a special grid for card projects
  $cardProjectBox.classList.add("grid-fluid");

  // Call at ajax for show project cards
  if (typeProject === "individual") {
    getProyects($cardProjectBox);
    $projectsIntroSection.id = "individualProject-section";
    $projectTitle.innerHTML = individualSectionTitle;
    // $buttonsBox.appendChild(buttons(urlButton, textButton));
  } else {
    printGrupalProjects($cardProjectBox);
    $projectTitle.innerHTML = grupalSectionTitle;
    $projectsIntroSection.id = "grupalProject-section";
  }
  $projectsIntroSection.appendChild($projectTitle);
  $projectsIntroSection.appendChild($cardProjectBox);
  $projectsIntroSection.appendChild($buttonsBox);

  return $projectsIntroSection;
}
