import { buttons } from "../helpers/buttons.js";
import { getProyects } from "../helpers/getProyects.js";

export function ProjectsIntroduction(){

    const $projectsBox = document.createElement("div"),
    $projectTitle = document.createElement("h6"),
    $cardProjectBox = document.createElement("div"),
    $buttonsBox = document.createElement("div");

    // const of helper component buttons
    const textButton = "Mas Proyectos",
    urlButton = "#/proyectos";

    // css class
    $projectsBox.classList.add("conteiner");
    $projectsBox.classList.add("proyects");
    $cardProjectBox.classList.add("slider-conteiner");
    $buttonsBox.classList.add("slider-conteiner");


    // title
    $projectTitle.classList.add("title-aboutMe-proyects");
    $projectTitle.innerHTML = "Proyectos";

    $projectsBox.appendChild($projectTitle);
    
    // Set a special grid for card projects
    $cardProjectBox.classList.add("grid-fluid");

    // Call at ajax for show project cards
    getProyects($cardProjectBox);

    $buttonsBox.appendChild(buttons(urlButton, textButton));

    $projectsBox.appendChild($cardProjectBox);
    $projectsBox.appendChild($buttonsBox);

    return $projectsBox;
}