export function AboutMeIntroCards(){

    const $doc = document,
    $cardsConteiner = $doc.createElement("div");

    // box, title, list and animation's div of interest 
    const $interestBox  = $doc.createElement("div"),
    $interestTitle = $doc.createElement("p"),
    $interestList = $doc.createElement("ul"),
    $interestAnimacion = $doc.createElement("div");

    // box, title, list and animation's div of soft skills
    const $softSkillsBox = $doc.createElement("div"),
    $skillsTitle = $doc.createElement("p"),
    $softSkillsList = $doc.createElement("ul"),
    $softSkillsAnimacion = $doc.createElement("div");

    // box, title, list and animation's div of hobbies
    const $hobbiesBox = $doc.createElement("div"),
    $hobbiesTitle = $doc.createElement("p"),
    $hobbiesList = $doc.createElement("ul"),
    $hobbiesAnimacion = $doc.createElement("div");


    // classes
    $cardsConteiner.id = "cards";
    $cardsConteiner.classList.add("conteinerCards");

    // interest classes

    $interestBox.classList.add("interest-box");
    $interestBox.classList.add("box");
    $interestAnimacion.classList.add("hover-animation");

     // soft skills classes
    $softSkillsBox.classList.add("soft-skills-box");
    $softSkillsBox.classList.add("box");
    $softSkillsAnimacion.classList.add("hover-animation");

    // hobbies classes
    $hobbiesBox.classList.add("hobbies-box");
    $hobbiesBox.classList.add("box");
    $hobbiesAnimacion.classList.add("hover-animation");

    // textual content of interest box

    $interestTitle.innerHTML = "Intereses";

    $interestList.innerHTML = `
    <li>- Programacion</li>
    <li>- Aprender</li>
    <li>- Memes</li>
    <li>- Mi Familia</li>
    <li>- Libros</li>`;

    // textual content of soft skills box

    $skillsTitle.innerHTML = "Habilidades Blandas";

    $softSkillsList.innerHTML = `
    <li>- Autodidacta</li>
    <li>- Pro Activo</li>
    <li>- Persistente</li>
    <li>- Manejo del Tiempo</li>
    <li>- Amable</li>`;

    // textual content of hobbies box

    $hobbiesTitle.innerHTML = "Hobbies";

    $hobbiesList.innerHTML = `
    <li>- Traducir</li>
    <li>- Juegos</li>
    <li>- Diseñar obj 3d</li>`;
    

    // appending of interest

    $interestBox.appendChild($interestTitle);
    $interestBox.appendChild($interestList);
    $interestBox.appendChild($interestAnimacion);

    // appending of soft skills

    $softSkillsBox.appendChild($skillsTitle);
    $softSkillsBox.appendChild($softSkillsList);
    $softSkillsBox.appendChild($softSkillsAnimacion);

    // appending of hobbies
    
    $hobbiesBox.appendChild($hobbiesTitle);
    $hobbiesBox.appendChild($hobbiesList);
    $hobbiesBox.appendChild($hobbiesAnimacion);

    // add the box at conteiner

    $cardsConteiner.appendChild($interestBox);
    $cardsConteiner.appendChild($softSkillsBox);
    $cardsConteiner.appendChild($hobbiesBox);

    return $cardsConteiner;
}