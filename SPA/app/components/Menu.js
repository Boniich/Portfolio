export function Menu(){

    const $menu = document.createElement("nav"),
    $ul = document.createElement("ul");

    // Creamos <li> y damos textos a los link del menu

    $ul.innerHTML = `
    <li><a>Inicio<a/></li>
    <li><a>Sobre MI<a/></li>
    <li><a>Proyectos<a/></li>
    <li><a>Contactame<a/></li>
    `

    //agregamos nodos como hijos
    $menu.appendChild($ul);

    return $menu;
}