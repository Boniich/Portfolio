export function Nav(){

    const $navConteiner = document.createElement("div"),
    $nav = document.createElement("nav"),
    $ul = document.createElement("ul");

    $navConteiner.classList.add("nav-conteiner"),
    $nav.classList.add("nav");

    // Creamos <li> y damos textos a los link del menu

    $ul.innerHTML = `
    <li><a href="#/">Inicio</a></li>
    <li><a href="#/sobremi">Sobre Mi</a></li>
    <li><a href="#/proyectos">Proyectos</a></li>
    <li><a href="#/contactame">Contactame</a></li>
    `

    $nav.appendChild($ul);

    $navConteiner.appendChild($nav);
   

    return $navConteiner;
}