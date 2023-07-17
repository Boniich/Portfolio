import { Main } from "../main/Main.js";
import { Hero } from "../hero/Hero.js";
import { InfoProjects } from "../proyects/infoProjects/InfoProjects.js";
import {
  ApiHeros,
  CalculatorData,
  CarCrashData,
  ClothingStore,
  GameOfLifeData,
  HomeBankingData,
} from "../../helpers/helperObjects.js";

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
    hash === "#web-dev" ||
    hash === "#desktop-dev"
  ) {
    $heroConteiner.appendChild(Hero());
    $main.appendChild(Main());
  } else if (hash === "#/car-crash") {
    $heroConteiner.appendChild(InfoProjects(CarCrashData));
  } else if (hash === "#/calculator") {
    $heroConteiner.appendChild(InfoProjects(CalculatorData));
  } else if (hash === "#/home-banking") {
    $heroConteiner.appendChild(InfoProjects(HomeBankingData));
  } else if (hash === "#/game-of-life") {
    $heroConteiner.appendChild(InfoProjects(GameOfLifeData));
  } else if (hash === "#/clothing-store") {
    $heroConteiner.appendChild(InfoProjects(ClothingStore));
  } else if (hash === "#/api-heros") {
    $heroConteiner.appendChild(InfoProjects(ApiHeros));
  }
}
