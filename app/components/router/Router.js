import { Main } from "../main/Main.js";
// import { getProyects } from "../../helpers/getProyects.js";
import { Hero } from "../hero/Hero.js";
// import { heroProject } from "../proyects/moreProjectHero/heroProject.js";

export async function Router() {
  const $doc = document,
    $main = $doc.getElementById("main-conteiner"),
    $heroConteiner = $doc.getElementById("heroConteiner");

  $heroConteiner.appendChild(Hero());
  $main.appendChild(Main());
}
