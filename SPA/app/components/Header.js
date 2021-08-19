import { Menu } from "./Menu.js";
import { TextHeader } from "./TextHeader.js";

export function Header(){

    const $header = document.createElement('header');

    // nodos hijos

    $header.appendChild(Menu());
    $header.appendChild(TextHeader());


    return $header;


}