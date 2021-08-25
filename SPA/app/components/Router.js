import { AboutMe } from "./AboutMe.js";
import { Main } from "./Main.js";


export function Router(){

    const $doc = document,
    $MainConteiner = $doc.getElementById("MainConteiner");

    let {hash} = location;

    if(!hash || hash === "#/"){

        
        $MainConteiner.appendChild(Main());

    }else if (hash === "#/sobremi"){
      
        
        $MainConteiner.appendChild(AboutMe());

    }else if (hash === "#/proyectos"){

        $MainConteiner.innerHTML = "Seccion de Proyectos";

    }else{
        $MainConteiner.innerHTML = "contactame";
    }


}