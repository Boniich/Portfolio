import { AboutMe } from "./AboutMe.js";
import { Main } from "./Main.js";


export function Router(){

    const $doc = document,
    $mainConteiner = $doc.getElementById("main-conteiner"),
    $hero = $doc.querySelector(".hero");

    let {hash} = location;

    if(!hash || hash === "#/"){

        
        $mainConteiner.appendChild(Main());

    }else if (hash === "#/sobremi"){
      
        $hero.style.display = "none";
        $mainConteiner.appendChild(AboutMe());

    }else if (hash === "#/proyectos"){

        $MainConteiner.innerHTML = "Seccion de Proyectos";

    }else{
        $MainConteiner.innerHTML = "contactame";
    }


}