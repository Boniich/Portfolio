import { ajax } from "../helpers/ajax.js";
import { ProyectsCards } from "../components/ProyectsCards.js";



export async function getProyects(element){
    let {hash} = location;
    let urlProyects = ``;


    if(!hash || hash === "#/"){
        urlProyects = `app/assets/json/DataProjectIntroduction.json`
    }

    if(hash === "#/proyectos"){
        urlProyects = `app/assets/json/DataProjects.json`
    }

    await ajax({
        url: urlProyects,
        cbSuccess: (proyects) =>{
            console.log(proyects);
            proyects.forEach(proyect => {

               element.appendChild(ProyectsCards(proyect));
            });

        }

    });



} 