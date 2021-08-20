export function Proyects(){

    const $proyects = document.createElement("div"),
    $titleProyects = document.createElement("h6");

    $proyects.classList.add("proyects");

    $titleProyects.innerHTML = "Proyectos";

    $proyects.appendChild($titleProyects);

    return $proyects;
}