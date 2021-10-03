import { AboutMeIntro } from "./AboutMeIntro.js";
import { ProjectsIntroduction } from "./ProjectsIntroduction.js";
import { Skills } from "./Skills.js";

export function Main(){

    const $main = document.createElement("main");

    $main.classList.add("main");

    $main.appendChild(AboutMeIntro());
    $main.appendChild(ProjectsIntroduction());
    $main.appendChild(Skills());

    return $main;
}