import { ajax } from "../../../helpers/ajax.js";
import { ProyectsCards } from "../proyectCards/ProyectsCards.js";

export async function printGrupalProjects(element) {
  let urlProyects = `app/assets/json/grupalProjects/DataGrupalProjectIntro.json`;
  await ajax({
    url: urlProyects,
    cbSuccess: (proyects) => {
      console.log(proyects);
      proyects.forEach((proyect) => {
        element.appendChild(ProyectsCards(proyect, "group"));
      });
    },
  });
}
