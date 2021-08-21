export function Skills(){

    const $skillsConteiner = document.createElement("div"),
    $caja1 = document.createElement("div"),
    $titleSkills = document.createElement("h6"),
    $skillsBox = document.createElement("div"),
    $ulSkills = document.createElement("ul");

    $skillsConteiner.classList.add("skillConteiner");
    $skillsBox.classList.add("skillBox");
    $ulSkills.classList.add("skillsList");
    $caja1.classList.add("caja1");


    

    $titleSkills.innerHTML = `Habilidades`;
    $ulSkills.innerHTML = `
     <li><img class="iconSkills" src="app/assets/react.svg" width="50px" height="50px"></img></li>
     <li><img class="iconSkills" src="app/assets/html.svg" width="50px" height="50px"></img></li>
     <li><img class="iconSkills" src="app/assets/css.svg" width="50px" height="50px"></img></li>
     <li><img class="iconSkills" src="app/assets/js.svg" width="50px" height="50px"></img></li>
     <li><img class="iconSkills" src="app/assets/nodejs.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/php.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/mysql.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/c.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/c++.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/java.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/git.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/trello.svg" width="50px" height="50px"></img></<li>
     <li><img class="iconSkills" src="app/assets/terminal.svg" width="50px" height="50px"></img></<li>
     `;

    $skillsBox.appendChild($ulSkills);
    $skillsConteiner.appendChild($titleSkills);
    $caja1.appendChild($skillsBox);
    $skillsConteiner.appendChild($caja1);


    return $skillsConteiner;
}