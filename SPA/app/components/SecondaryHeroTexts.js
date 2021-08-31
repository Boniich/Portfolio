export function SecondaryHeroTexts(){

    const $secondaryHeroTexts = document.createElement("div"),
    $tag = document.createElement('p'),
    $title = document.createElement("h1");
   


    let {hash} = location;

    // css

    $tag.classList.add("seccion-tag");

    if(hash === "#/sobremi"){
        $tag.innerHTML = "About Me";
        $title.innerHTML = "Ezequiel Bonino";
    }else if(hash === "#/proyectos"){
        $tag.innerHTML = "Proyectos";
        $title.innerHTML = "Selecciona un de los Proyectos que realize con mucho entuciasmo.";
    }
 
    $secondaryHeroTexts.appendChild($tag)
    $secondaryHeroTexts.appendChild($title)


    return $secondaryHeroTexts;
}