export function AboutMeIntroCards(){

    const $doc = document,
    $conteinerCards = $doc.createElement("div"),
    $boxInterest  = $doc.createElement("div"),
    $ulInterest = $doc.createElement("ul"),
    $boxSoftSkills = $doc.createElement("div"),
    $ulSoftSkills = $doc.createElement("ul"),
    $boxHobbies = $doc.createElement("div"),
    $ulHobbies = $doc.createElement("ul");


    $ulInterest.innerHTML = `
    <li>Programacion</li>
    <li>Aprender</li>
    <li>Memes</li>`;

    $ulSoftSkills.innerHTML = `
    <li>Pro Activo</li>
    <li></li>
    <li></li>`;

    $ulHobbies.innerHTML = `
    <li>Traducir</li>
    <li>Juegos</li>
    <li></li>`;
    


    $boxInterest.appendChild($ulInterest);
    $boxSoftSkills.appendChild($ulSoftSkills);
    $boxHobbies.appendChild($ulHobbies);

    // add the box at conteiner

    $conteinerCards.appendChild($boxInterest);
    $conteinerCards.appendChild($boxSoftSkills);
    $conteinerCards.appendChild($boxHobbies);

    return $conteinerCards;
}