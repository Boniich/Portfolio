import { buttons } from "../helpers/buttons.js";
import { Slider } from "./slider.js";

export function ProyectsSlider(){

    const $proyects = document.createElement("div"),
    $titleProyects = document.createElement("h6"),
    $sliderConteiner = document.createElement("div");

    // const of helper component buttons
    const textButton = "Mas Proyectos",
    urlButton = "#/proyectos";

    // css class
    $proyects.classList.add("conteiner");
    $proyects.classList.add("proyects");
    $sliderConteiner.classList.add("slider-conteiner");


    // title
    $titleProyects.classList.add("title-aboutMe-proyects");
    $titleProyects.innerHTML = "Proyectos";

    $proyects.appendChild($titleProyects);
    
    // added slider component
    $sliderConteiner.appendChild(Slider());

    // added button's herper component
    $sliderConteiner.appendChild(buttons(urlButton, textButton));

    $proyects.appendChild($sliderConteiner);

    return $proyects;
}