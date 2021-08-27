import { Footer } from "./components/Footer.js";
import { Hero } from "./components/Hero.js";
import { MainConteiner } from "./components/MainConteiner.js";
import { Nav } from "./components/Nav.js";
import { Router } from "./components/Router.js";


export function App(){
    
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Nav());
    $root.appendChild(Hero());
    $root.appendChild(MainConteiner());
    $root.appendChild(Footer());

    Router();



}