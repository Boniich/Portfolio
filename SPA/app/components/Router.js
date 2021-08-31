import { ajax } from "../helpers/ajax.js";
import { AboutMe } from "./AboutMe.js";
import { ContactMe } from "./ContactMe.js";
import { Hero } from "./Hero.js";
import { SecondaryHero } from "./SecondaryHero.js";
import { Main } from "./Main.js";
import { ProyectsCards } from "./ProyectsCards.js";


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

        await ajax({
            url: `app/assets/json/proyects.json`,
            cbSuccess: (proyects) =>{
                console.log(proyects);

                proyects.forEach(proyect => {

                   $main.appendChild(ProyectsCards(proyect));
                });

            }

        });

    }else{
        $nav.style.position = "relative";
        $heroConteiner.style.display = "none";
        $main.appendChild(ContactMe());
    }


}