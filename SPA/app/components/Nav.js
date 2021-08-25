export function Nav(){

    const $conteinerNav = document.createElement("div"),
    $nav = document.createElement("nav"),
    $ul = document.createElement("ul");

    $conteinerNav.classList.add("header"),
    $nav.classList.add("nav");

    // Creamos <li> y damos textos a los link del menu

    $ul.innerHTML = `
    <li><a href="#/">Inicio<a/></li>
    <li><a href="#/sobremi">Sobre Mi<a/></li>
    <li><a href="#/proyectos">Proyectos<a/></li>
    <li><a href="#/contactame">Contactame<a/></li>
    `

    $nav.appendChild($ul);

    $conteinerNav.appendChild($nav);
   

    return $conteinerNav;
}