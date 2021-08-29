export function MainConteiner(){

    const $mainConteiner = document.createElement("div"),
    $conteiner =  document.createElement("div"),
    $boxMain = document.createElement("div");

    $mainConteiner.id = "main-conteiner";
    $conteiner.classList.add("conteiner");
    $boxMain.id = "box-main"
    $boxMain.classList.add("box-main");

    $conteiner.appendChild($boxMain);
    $mainConteiner.appendChild($conteiner);
  

    return $mainConteiner; 
}