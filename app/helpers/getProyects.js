import { ajax } from "../helpers/ajax.js";
import { ProyectsCards } from "../components/proyects/proyectCards/ProyectsCards.js";

export async function getProyects(element) {
  let { hash } = location;
  let relativeUrl = `app/assets/json/individualProjects`;
  let urlProyects = ``;

  if (
    !hash ||
    hash === "#/" ||
    hash === "#contact" ||
    hash === "#aboutMe-section" ||
    hash === "#projectIntro-section" ||
    hash === "#skill-section"
  ) {
    urlProyects = `${relativeUrl}/DataProjectIntroduction.json`;
  }

  //   if (hash === "#/proyectos") {
  //     urlProyects = `${relativeUrl}/DataProjects.json`;
  //   }

  await ajax({
    url: urlProyects,
    cbSuccess: (proyects) => {
      console.log(proyects);
      proyects.forEach((proyect) => {
        element.appendChild(ProyectsCards(proyect));
      });
    },
  });
}
