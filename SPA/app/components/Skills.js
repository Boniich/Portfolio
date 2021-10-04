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
     <li><img class="icon-skills" src="app/assets/icons/react.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/html.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/css.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/js.svg" width="50px" height="50px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/nodejs.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/php.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/mysql.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/c.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/c++.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/java.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/git.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/trello.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/terminal.svg" width="50px" height="50px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/sass.svg" width="50px" height="50px"></img></<li>
     `;
    
    $skillsConteiner.appendChild($titleSkills);
    $skillsConteiner.appendChild($skillsBoxConteiner);
    $skillsBoxConteiner.appendChild($skillsBox);
    $skillsBox.appendChild($ulSkills);
    
    
    
   


    return $skillsConteiner;
}