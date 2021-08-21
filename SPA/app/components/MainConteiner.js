import { Main } from "./Main.js";

export function MainConteiner(){

    const $mainConteiner = document.createElement("div");

    $mainConteiner.classList.add("mainConteiner");


    $mainConteiner.appendChild(Main());


    return $mainConteiner; 
}