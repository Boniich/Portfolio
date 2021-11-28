import { AboutMeSection } from "../aboutMeSection/AboutMeSection.js";
import { ContactMeSection } from "../contactMeSection/ContactMeSection.js";
import { ProjectsIntroSection } from "../proyects/proyectIntro/ProjectsIntroSection.js";
import { SkillSection } from "../skillSection/SkillSection.js";

export function Main(){

    const $main = document.createElement("main");

    $main.classList.add("main");

    $main.appendChild(AboutMeSection());
    $main.appendChild(ProjectsIntroSection());
    $main.appendChild(SkillSection());
    $main.appendChild(ContactMeSection());
    return $main;
}