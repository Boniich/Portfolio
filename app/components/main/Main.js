import { AboutMeSection } from "../aboutMeSection/AboutMeSection.js";
import { ContactMeSection } from "../contactMeSection/ContactMeSection.js";
import { ProjectsIntroSection } from "../proyects/proyectIntro/ProjectsIntroSection.js";

export function Main() {
  const $main = document.createElement("main");

  $main.classList.add("main");

  $main.appendChild(AboutMeSection());
  $main.appendChild(ProjectsIntroSection("Web Developement"));
  $main.appendChild(ProjectsIntroSection("Desktop Developement"));
  $main.appendChild(ProjectsIntroSection("Game Developement"));
  $main.appendChild(ContactMeSection());
  return $main;
}
