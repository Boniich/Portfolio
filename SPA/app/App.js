import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { MainConteiner } from "./components/MainConteiner.js";
import { Router } from "./components/Router.js";


export function App(){
    
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(MainConteiner());
    $root.appendChild(Footer());

 
    Router();



}