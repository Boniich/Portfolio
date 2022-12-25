import { HeroInfoProjects } from "./heroInfoProjects.js";

export function InfoProjects() {
  const $infoProjectsContainer = document.createElement("div");

  $infoProjectsContainer.appendChild(HeroInfoProjects());

  return $infoProjectsContainer;
}
