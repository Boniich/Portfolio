export function Nav() {
  const $navConteiner = document.createElement("div"),
    $nav = document.createElement("nav"),
    $label = document.createElement("label"),
    $ul = document.createElement("ul"),
    $brandContainer = document.createElement("div"),
    $brand = document.createElement("p"),
    $brandName = document.createElement("p"),
    $startBrand = document.createElement("span"),
    $endBrand = document.createElement("span");

  $navConteiner.id = "nav-id";
  $brandContainer.classList.add("brandContainer");
  $brand.classList.add("brand");
  $navConteiner.classList.add("nav-conteiner");
  $nav.classList.add("nav");
  $label.classList.add("icon");
  $ul.classList.add("navList");

  $label.innerHTML = `<i class="fas fa-bars"></i>`;
  $brandName.innerHTML = `Boniich`;
  $startBrand.innerHTML = "${ ";
  $endBrand.innerHTML = " }";
  $brand.innerHTML = `<span class="startBrandSign">$ { </span><span  class="brandName">Boniich</span><span class="endBrandSign"> }</span>`;

  $ul.innerHTML = `
    <li><a href="#/">Inicio</a></li>
    <li><a href="#aboutMe-section">Sobre Mi</a></li>
    <li><a href="#skill-section">Stacks</a></li>
    <li><a>Proyectos</a> 
    <ul class="sub-nav">
    <li><a href="#grupalProject-section">Proyectos Grupales</a></li>
    <li><a href="#individualProject-section">Proyectos Individuales</a></li>
    </ul></li>
    <li><a href="#contact">Contactame</a></li>
    `;
  $brandContainer.appendChild($brand);
  $brandContainer.appendChild($label);
  $nav.appendChild($brandContainer);
  $nav.appendChild($ul);

  $navConteiner.appendChild($nav);

  return $navConteiner;
}
