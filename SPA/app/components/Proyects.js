export function Proyects(){

    const $proyects = document.createElement("div"),
    $titleProyects = document.createElement("h6");

    $titleProyects.innerHTML = "Proyectos";

    $proyects.appendChild($titleProyects);

    return $proyects;
}