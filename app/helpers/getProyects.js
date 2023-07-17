import { ajax } from "../helpers/ajax.js";
import { ProyectsCards } from "../components/proyects/proyectCards/ProyectsCards.js";

export async function getProyects(element, urlSection, $end = null) {
  let { hash } = location;
  let urlProyects = ``;

  const checkHash =
    !hash ||
    hash === "#home" ||
    hash === "#contact" ||
    hash === "#aboutMe-section" ||
    hash === "#game-dev" ||
    hash === "#web-dev" ||
    hash === "#desktop-dev";

  if (checkHash && urlSection == "Web Developement") {
    if ($end === "front") {
      urlProyects = `app/assets/json/FrontEndWebDevData.json`;
    } else if ($end === "back") {
      urlProyects = `app/assets/json/BackEndWebDevData.json`;
    }
  }

  if (checkHash && urlSection == "Game Developement") {
    urlProyects = `app/assets/json/GameDevData.json`;
  }

  if (checkHash && urlSection == "Desktop Developement") {
    urlProyects = `app/assets/json/DesktopDevData.json`;
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
