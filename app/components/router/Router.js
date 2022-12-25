import { Main } from "../main/Main.js";
import { getProyects } from "../../helpers/getProyects.js";
import { Hero } from "../hero/Hero.js";
import { heroProject } from "../proyects/moreProjectHero/heroProject.js";

export async function Router() {
  const $doc = document,
    $main = $doc.getElementById("main-conteiner"),
    $heroConteiner = $doc.getElementById("heroConteiner");

  let { hash } = location;

  if (
    !hash ||
    hash === "#home" ||
    hash === "#contact" ||
    hash === "#aboutMe-section" ||
    hash === "#game-dev" ||
    hash === "#web-dev"
  ) {
    $heroConteiner.appendChild(Hero());
    $main.appendChild(Main());
  } else if (hash === "#/proyectos") {
    $heroConteiner.appendChild(heroProject());
    $main.classList.add("grid-fluid");
    //call async function that render proyects cards
    getProyects($main);
  }
}
