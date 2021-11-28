export function heroProject() {

    let {hash} = location;

    const $heroProject = document.createElement("div"),
    $heroAboutMeContent = document.createElement("div"),
    $heroProjectTexts = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1");

    $heroProject.classList.add("hero-about-me");
    $heroAboutMeContent.classList.add("hero-content-about-me");

    $tag.classList.add("seccion-tag");

    $tag.innerHTML = "Proyectos";
    $title.innerHTML = "Selecciona un Proyecto";

    $heroProjectTexts.appendChild($tag);
    $heroProjectTexts.appendChild($title);
    $heroAboutMeContent.appendChild($heroProjectTexts);
    $heroProject.appendChild($heroAboutMeContent);

    return $heroProject;
    
}