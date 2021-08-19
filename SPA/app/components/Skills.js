export function Skills(){

    const $skillsConteiner = document.createElement("div"),
    $titleSkills = document.createElement("h6"),
    $skillsBox = document.createElement("div"),
    $ulSkills = document.createElement("ul");

    $titleSkills.innerHTML = `Habilidades`;
    $ulSkills.innerHTML = `<li>Node</li> <li>JavaScript</<li>`;

    $skillsBox.appendChild($ulSkills);
    $skillsConteiner.appendChild($titleSkills);
    $skillsConteiner.appendChild($skillsBox);


    return $skillsConteiner;
}