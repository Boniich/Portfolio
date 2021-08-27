import { Footer } from "./components/Footer.js";
import { HeroConteiner } from "./components/HeroConteiner.js";
import { MainConteiner } from "./components/MainConteiner.js";
import { Nav } from "./components/Nav.js";
import { Router } from "./components/Router.js";


export function App(){
    
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Nav());
    $root.appendChild(HeroConteiner());
    $root.appendChild(MainConteiner());
    $root.appendChild(Footer());

    Router();



}