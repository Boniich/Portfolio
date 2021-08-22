export function AboutMeIntroCards(){

    const $doc = document,
    $conteinerCards = $doc.createElement("div");

    // box, title, list and animation's div of interest 
    const $boxInterest  = $doc.createElement("div"),
    $titleInterest = $doc.createElement("p"),
    $ulInterest = $doc.createElement("ul"),
    $interestAnimacion = $doc.createElement("div");

    // box, title, list and animation's div of soft skills
    const $boxSoftSkills = $doc.createElement("div"),
    $titleSkills = $doc.createElement("p"),
    $ulSoftSkills = $doc.createElement("ul"),
    $softSkillsAnimacion = $doc.createElement("div");

    // box, title, list and animation's div of hobbies
    const $boxHobbies = $doc.createElement("div"),
    $titleHobbies = $doc.createElement("p"),
    $ulHobbies = $doc.createElement("ul"),
    $hobbiesAnimacion = $doc.createElement("div");


    // classes
    $conteinerCards.classList.add("conteinerCards");

    // interest classes

    $boxInterest.classList.add("boxInterest");
    $boxInterest.classList.add("box");
    $interestAnimacion.classList.add("background-hover");

     // soft skills classes
    $boxSoftSkills.classList.add("boxSoftSkills");
    $boxSoftSkills.classList.add("box");
    $softSkillsAnimacion.classList.add("background-hover");

    // hobbies classes
    $boxHobbies.classList.add("boxHobbies");
    $boxHobbies.classList.add("box");
    $hobbiesAnimacion.classList.add("background-hover");

    // textual content of interest box

    $titleInterest.innerHTML = "Intereses";

    $ulInterest.innerHTML = `
    <li>- Programacion</li>
    <li>- Aprender</li>
    <li>- Memes</li>
    <li>- Mi Familia</li>
    <li>- Libros</li>`;

    // textual content of soft skills box

    $titleSkills.innerHTML = "Habilidades Blandas";

    $ulSoftSkills.innerHTML = `
    <li>- Autodidacta</li>
    <li>- Pro Activo</li>
    <li>- Persistente</li>
    <li>- Manejo del Tiempo</li>
    <li>- Amable</li>`;

    // textual content of hobbies box

    $titleHobbies.innerHTML = "Hobbies";

    $ulHobbies.innerHTML = `
    <li>- Traducir</li>
    <li>- Juegos</li>
    <li>- Diseñar obj 3d</li>`;
    

    // appending of interest

    $boxInterest.appendChild($titleInterest);
    $boxInterest.appendChild($ulInterest);
    $boxInterest.appendChild($interestAnimacion);

    // appending of soft skills

    $boxSoftSkills.appendChild($titleSkills);
    $boxSoftSkills.appendChild($ulSoftSkills);
    $boxSoftSkills.appendChild($softSkillsAnimacion);

    // appending of hobbies
    
    $boxHobbies.appendChild($titleHobbies);
    $boxHobbies.appendChild($ulHobbies);
    $boxHobbies.appendChild($hobbiesAnimacion);

    // add the box at conteiner

    $conteinerCards.appendChild($boxInterest);
    $conteinerCards.appendChild($boxSoftSkills);
    $conteinerCards.appendChild($boxHobbies);

    return $conteinerCards;
}