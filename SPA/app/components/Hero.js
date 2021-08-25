import { HeroTexts } from "./HeroTexts.js";

export function Hero(){

    const $hero = document.createElement("div"),
    $heroContent = document.createElement("div");

    $hero.classList.add("hero");
    $heroContent.classList.add("hero-content");

    $heroContent.appendChild(HeroTexts());
    $hero.appendChild($heroContent);



    return $hero; 
}