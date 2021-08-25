export function Skills(){

    const $skillsConteiner = document.createElement("div"),
    $skillsBoxConteiner = document.createElement("div"),
    $titleSkills = document.createElement("h6"),
    $skillsBox = document.createElement("div"),
    $ulSkills = document.createElement("ul");

    $skillsConteiner.id = "skills"
    $skillsConteiner.classList.add("conteiner");
    $skillsBoxConteiner.classList.add("skills-box-conteiner");
    $skillsBox.classList.add("skill-box");
    $titleSkills.classList.add("skills-title-box");
    $ulSkills.classList.add("skills-list");
   


    

    $titleSkills.innerHTML = `Habilidades`;
    $ulSkills.innerHTML = `
     <li><img class="icon-skills" src="app/assets/react.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/html.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/css.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/js.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/nodejs.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/php.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/mysql.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/c.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/c++.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/java.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/git.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/trello.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/terminal.svg" width="50px" height="50px"></img></<li>
     `;
    
    $skillsConteiner.appendChild($titleSkills);
    $skillsConteiner.appendChild($skillsBoxConteiner);
    $skillsBoxConteiner.appendChild($skillsBox);
    $skillsBox.appendChild($ulSkills);
    
    
    
   


    return $skillsConteiner;
}