export function Nav(){

    const $navConteiner = document.createElement("div"),
    $nav = document.createElement("nav"),
    $label = document.createElement("label"),
    $ul = document.createElement("ul");

    $navConteiner.id = "nav-id";
    $navConteiner.classList.add("nav-conteiner"),
    $nav.classList.add("nav");
    $label.classList.add("icon");
    $ul.classList.add("navList");


    $label.innerHTML = `<i class="fas fa-bars"></i>`;

    $ul.innerHTML = `
    <li><a href="#/">Inicio</a></li>
    <li><a href="#aboutMe-section">Sobre Mi</a></li>
    <li><a href="#skill-section">Habilidades</a><li>
    <li><a href="#projectIntro-section">Proyectos</a>
    <ul class="sub-nav">
    <li><a href="#/proyectos">Mas Proyectos</a></li>
    </ul></li>
    <li><a href="#contact">Contactame</a></li>
    `
    $nav.appendChild($label);
    $nav.appendChild($ul);

    $navConteiner.appendChild($nav);
   

    return $navConteiner;
}