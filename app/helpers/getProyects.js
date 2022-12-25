import { ajax } from "../helpers/ajax.js";
import { ProyectsCards } from "../components/proyects/proyectCards/ProyectsCards.js";

export async function getProyects(element, urlSection) {
  let { hash } = location;
  let urlProyects = ``;

  const checkHash =
    !hash ||
    hash === "#/" ||
    hash === "#contact" ||
    hash === "#aboutMe-section" ||
    hash === "#projectIntro-section" ||
    hash === "#skill-section";

  if (checkHash && urlSection == "Web Developement") {
    urlProyects = `app/assets/json/DataProjectIntroduction.json`;
  }

  if (checkHash && urlSection == "Game Developement") {
    urlProyects = `app/assets/json/DataProjectIntroduction.json`;
  }

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
