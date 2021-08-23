import { Menu } from "./Menu.js";
import { TextHeader } from "./TextHeader.js";

export function Header(){

    const $header = document.createElement('header'),
    $headerConteiner = document.createElement("div");

    $header.classList.add("header");
    $headerConteiner.classList.add("headerConteiner");
    // nodos hijos

    $header.appendChild(Menu());

    $headerConteiner.appendChild(TextHeader());

    $header.appendChild($headerConteiner);


    return $header;


}