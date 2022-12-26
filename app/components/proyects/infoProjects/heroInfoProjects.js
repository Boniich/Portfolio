export function HeroInfoProjects(dataObject) {
  const $hero = document.createElement("div"),
    $heroContent = document.createElement("div");

  $hero.classList.add("hero");
  $hero.id = dataObject.cssId;
  $heroContent.classList.add("hero-content");

  $heroContent.appendChild(ProjectDescription(dataObject));
  $hero.appendChild($heroContent);

  return $hero;
}

function ProjectDescription(dataObject) {
  const $projectDescriptionContainer = document.createElement("div"),
    $projectTitle = document.createElement("h1"),
    $projectDescription = document.createElement("h2");

  $projectDescriptionContainer.classList.add("info-projects");

  $projectTitle.innerHTML = dataObject.title;
  $projectDescription.innerHTML = dataObject.description;

  $projectDescriptionContainer.appendChild($projectTitle);
  $projectDescriptionContainer.appendChild($projectDescription);

  return $projectDescriptionContainer;
}
