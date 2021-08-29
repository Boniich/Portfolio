import { ajax } from "../helpers/ajax.js";
import { AboutMe } from "./AboutMe.js";
import { Hero } from "./Hero.js";
import { HeroAboutMe } from "./HeroAboutMe.js";
import { HeroProyects } from "./HeroProyects.js";
import { Main } from "./Main.js";
import { ProyectsCards } from "./ProyectsCards.js";


export async function Router(){

    const $doc = document,
    $main = $doc.getElementById("main-conteiner"),
    $heroConteiner = $doc.getElementById("heroConteiner");

    let {hash} = location;

    if(!hash || hash === "#/"){
       
        $heroConteiner.appendChild(Hero());
        $main.appendChild(Main());

    }else if (hash === "#/sobremi"){
      
        $heroConteiner.appendChild(HeroAboutMe());
        $main.appendChild(AboutMe());

    }else if (hash === "#/proyectos"){

        $heroConteiner.appendChild(HeroProyects());

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
        $MainConteiner.innerHTML = "contactame";
    }


}