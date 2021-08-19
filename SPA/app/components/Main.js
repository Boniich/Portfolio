import { AboutMeIntro } from "./AboutMeIntro.js";
import { Proyects } from "./Proyects.js";
import { Skills } from "./Skills.js";

export function Main(){

    const $main = document.createElement("main");

    $main.appendChild(AboutMeIntro());
    $main.appendChild(Proyects());
    $main.appendChild(Skills());

    return $main;
}