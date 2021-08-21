export function Skills(){

    const $skillsConteiner = document.createElement("div"),
    $boxSkillsConteiner = document.createElement("div"),
    $titleSkills = document.createElement("h6"),
    $skillsBox = document.createElement("div"),
    $ulSkills = document.createElement("ul");

    $skillsConteiner.id = "skillsConteiner"
    $skillsConteiner.classList.add("conteiner");
    $boxSkillsConteiner.classList.add("boxSkillsConteiner");
    $skillsBox.classList.add("skillBox");
    $titleSkills.classList.add("skillsBoxTitle");
    $ulSkills.classList.add("skillsList");
   


    

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
    
    $skillsConteiner.appendChild($titleSkills);
    $skillsConteiner.appendChild($boxSkillsConteiner);
    $boxSkillsConteiner.appendChild($skillsBox);
    $skillsBox.appendChild($ulSkills);
    
    
    
   


    return $skillsConteiner;
}