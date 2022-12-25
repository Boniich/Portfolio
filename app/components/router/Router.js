import { Main } from "../main/Main.js";
import { Hero } from "../hero/Hero.js";
import { InfoProjects } from "../proyects/infoProjects/InfoProjects.js";

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
  } else if (hash === "#/car-crash") {
    $heroConteiner.appendChild(InfoProjects());
    //$main.classList.add("grid-fluid");
    //call async function that render proyects cards
    //getProyects($main);
  }
}
