export function HeroInfoProjects() {
  const $hero = document.createElement("div"),
    $heroContent = document.createElement("div");

  $hero.classList.add("hero");
  $hero.id = "id-car-crash";
  $heroContent.classList.add("hero-content");

  $heroContent.appendChild(ProjectDescription());
  $hero.appendChild($heroContent);

  return $hero;
}

function ProjectDescription() {
  const $projectDescriptionContainer = document.createElement("div"),
    $projectTitle = document.createElement("h1"),
    $projectDescription = document.createElement("h2");

  $projectDescriptionContainer.classList.add("info-projects");

  $projectTitle.innerHTML = "Car Crash";
  $projectDescription.innerHTML = "A Game about crash obstacule and get points";

  $projectDescriptionContainer.appendChild($projectTitle);
  $projectDescriptionContainer.appendChild($projectDescription);

  return $projectDescriptionContainer;
}
