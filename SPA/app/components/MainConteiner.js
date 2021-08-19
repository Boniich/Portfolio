import { Main } from "./Main.js";

export function MainConteiner(){

    const $mainConteiner = document.createElement("div");


    $mainConteiner.appendChild(Main());


    return $mainConteiner; 
}