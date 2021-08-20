import { Main } from "./Main.js";

export function MainConteiner(){

    const $mainConteiner = document.createElement("div");

    $mainConteiner.classList.add("conteiner");


    $mainConteiner.appendChild(Main());


    return $mainConteiner; 
}