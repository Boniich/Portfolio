import { Main } from "../main/Main.js";
// import { getProyects } from "../../helpers/getProyects.js";
import { Hero } from "../hero/Hero.js";
// import { heroProject } from "../proyects/moreProjectHero/heroProject.js";

export async function Router() {
  const $doc = document,
    $main = $doc.getElementById("main-conteiner"),
    $heroConteiner = $doc.getElementById("heroConteiner");

  let { hash } = location;

  if (
    !hash ||
    hash === "#/" ||
    hash === "#contact" ||
    hash === "#aboutMe-section" ||
    hash === "#projectIntro-section" ||
    hash === "#skill-section"
  ) {
    $heroConteiner.appendChild(Hero());
    $main.appendChild(Main());
  }
  //   it will be enabled if i add more project some day
  // else if (hash === "#/proyectos"){
  //     $heroConteiner.appendChild(heroProject());
  //     $main.classList.add("grid-fluid");
  //     //call async function that render proyects cards
  //     getProyects($main);

  // }
}
