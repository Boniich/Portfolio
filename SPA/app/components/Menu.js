export function Menu(){

    const $menu = document.createElement("nav"),
    $ul = document.createElement("ul");

    $menu.classList.add("nav");

    // Creamos <li> y damos textos a los link del menu

    $ul.innerHTML = `
    <li><a href="">Inicio<a/></li>
    <li><a href="">Sobre Mi<a/></li>
    <li><a href="">Proyectos<a/></li>
    <li><a href="">Contactame<a/></li>
    `

    //agregamos nodos como hijos
    $menu.appendChild($ul);

    return $menu;
}