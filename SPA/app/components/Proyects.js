import { Slider } from "./slider.js";

export function Proyects(){

    const $proyects = document.createElement("div"),
    $titleProyects = document.createElement("h6"),
    $sliderConteiner = document.createElement("div"),
    $buttonBox = document.createElement("div"),
    $button = document.createElement("div");

    $proyects.classList.add("conteiner");
    $proyects.classList.add("proyects");

    $sliderConteiner.classList.add("sliderConteiner");

    $buttonBox.classList.add("buttonBox");
    $button.classList.add("btnAboutMe");

    $titleProyects.innerHTML = "Proyectos";

    $proyects.appendChild($titleProyects);
    
    $sliderConteiner.appendChild(Slider());

    $button.innerHTML = `<a href="#">Mas Proyectos</a>`;

    $buttonBox.appendChild($button);
    $sliderConteiner.appendChild($buttonBox);

    $proyects.appendChild($sliderConteiner);

    return $proyects;
}