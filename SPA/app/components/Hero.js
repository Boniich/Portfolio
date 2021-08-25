import { TextHeader } from "./TextHeader.js";

export function Hero(){

    const $hero = document.createElement("div"),
    $heroConteiner = document.createElement("div");

    $hero.classList.add("hero");
    $heroConteiner.classList.add("headerConteiner");

    $heroConteiner.appendChild(TextHeader());
    $hero.appendChild($heroConteiner);



    return $hero; 
}