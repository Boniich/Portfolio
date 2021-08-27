import { AboutMe } from "./AboutMe.js";
import { Hero } from "./Hero.js";
import { HeroAboutMe } from "./HeroAboutMe.js";
import { Main } from "./Main.js";


export function Router(){

    const $doc = document,
    $mainConteiner = $doc.getElementById("main-conteiner"),
    $heroConteiner = $doc.getElementById("heroConteiner");

    let {hash} = location;

    if(!hash || hash === "#/"){
        
        $heroConteiner.appendChild(Hero());
        $mainConteiner.appendChild(Main());

    }else if (hash === "#/sobremi"){
      
        $heroConteiner.appendChild(HeroAboutMe());
        $mainConteiner.appendChild(AboutMe());

    }else if (hash === "#/proyectos"){

        $MainConteiner.innerHTML = "Seccion de Proyectos";

    }else{
        $MainConteiner.innerHTML = "contactame";
    }


}