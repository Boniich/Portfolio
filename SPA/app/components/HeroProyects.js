import { HeroTextsProyects } from "./HeroTextsProyects.js";


export function HeroProyects() {

    const $heroProyects = document.createElement("div"),
    $heroProyectsContent = document.createElement("div");

    $heroProyects.classList.add("hero-about-me");
    $heroProyectsContent.classList.add("hero-content-about-me");

    $heroProyectsContent.appendChild(HeroTextsProyects());
    $heroProyects.appendChild($heroProyectsContent);
    return $heroProyects;
    
}