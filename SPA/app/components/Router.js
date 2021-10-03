import { AboutMe } from "./AboutMe.js";
import { ContactMe } from "./ContactMe.js";
import { Hero } from "./Hero.js";
import { SecondaryHero } from "./SecondaryHero.js";
import { Main } from "./Main.js";
import { getProyects } from "../helpers/getProyects.js";


export async function Router(){

    const $doc = document,
    $nav = $doc.getElementById("nav-id"),
    $main = $doc.getElementById("main-conteiner"),
    $heroConteiner = $doc.getElementById("heroConteiner");

    let {hash} = location;

    if(!hash || hash === "#/"){
        $heroConteiner.appendChild(Hero());
        $main.appendChild(Main());
    }else if (hash === "#/sobremi"){

        $heroConteiner.appendChild(SecondaryHero());
        $main.appendChild(AboutMe());

    }else if (hash === "#/proyectos"){

        $heroConteiner.appendChild(SecondaryHero());
        $main.classList.add("grid-fluid");
        //call async function that render proyects cards
        getProyects($main);

    }else{

        $nav.style.position = "relative";
        $main.appendChild(ContactMe());

    }


}