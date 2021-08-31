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

    
    // addEventListener("DOMContentLoaded", () =>{
    //     const button = document.querySelector(".icon");

    //     button.addEventListener("click", ()=>{
    //         if(button){
    //             const menu = document.querySelector(".navList");
    //             menu.classList.toggle("open");
    //             const n = document.querySelector(".navList.open");
               

    //             if(n){
    //                 document.body.style.overflow = "hidden";
    //             }else{
    //                 document.body.style.overflow = "scroll";
    //             }
                
    //         }
    //     })
    // })


    // Creamos <li> y damos textos a los link del menu

    $label.innerHTML = `<i class="fas fa-bars"></i>`;

    $ul.innerHTML = `
    <li><a href="#/">Inicio</a></li>
    <li><a href="#/sobremi">Sobre Mi</a></li>
    <li><a href="#/proyectos">Proyectos</a></li>
    <li><a href="#/contactame">Contactame</a></li>
    `
    $nav.appendChild($label);
    $nav.appendChild($ul);

    $navConteiner.appendChild($nav);
   

    return $navConteiner;
}