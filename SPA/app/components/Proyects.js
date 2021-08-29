import { ProyectsCards } from "./ProyectsCards.js";


export function Proyects(){
    const $Proyects = document.createElement("div"),
    $proyectsConteiner = document.createElement("div");

    // css
    $Proyects.classList.add("conteiner");
    $proyectsConteiner.classList.add("box-proyects");
    
    $proyectsConteiner.appendChild(ProyectsCards());
    $Proyects.appendChild($proyectsConteiner);

    return $Proyects;
}