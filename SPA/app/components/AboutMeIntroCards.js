export function AboutMeIntroCards(){

    const $doc = document,
    $conteinerCards = $doc.createElement("div"),
    $boxInterest  = $doc.createElement("div"),
    $titleInterest = $doc.createElement("p"),
    $ulInterest = $doc.createElement("ul"),
    $boxSoftSkills = $doc.createElement("div"),
    $titleSkills = $doc.createElement("p"),
    $ulSoftSkills = $doc.createElement("ul"),
    $boxHobbies = $doc.createElement("div"),
    $titleHobbies = $doc.createElement("p"),
    $ulHobbies = $doc.createElement("ul");

    $conteinerCards.classList.add("conteinerCards");
    $boxInterest.classList.add("boxInterest");
    $boxSoftSkills.classList.add("boxSoftSkills");
    $boxHobbies.classList.add("boxHobbies");

    $titleInterest.innerHTML = "Intereses";

    $ulInterest.innerHTML = `
    <li>Programacion</li>
    <li>Aprender</li>
    <li>Memes</li>`;

    $titleSkills.innerHTML = "Habilidades Blandas";

    $ulSoftSkills.innerHTML = `
    <li>Pro Activo</li>
    <li></li>
    <li></li>`;


    $titleHobbies.innerHTML = "Hobbies";

    $ulHobbies.innerHTML = `
    <li>Traducir</li>
    <li>Juegos</li>
    <li></li>`;
    

    $boxInterest.appendChild($titleInterest);
    $boxInterest.appendChild($ulInterest);

    $boxSoftSkills.appendChild($titleSkills);
    $boxSoftSkills.appendChild($ulSoftSkills);
    
    $boxHobbies.appendChild($titleHobbies);
    $boxHobbies.appendChild($ulHobbies);

    // add the box at conteiner

    $conteinerCards.appendChild($boxInterest);
    $conteinerCards.appendChild($boxSoftSkills);
    $conteinerCards.appendChild($boxHobbies);

    return $conteinerCards;
}