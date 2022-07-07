export function SkillSection() {
  const $skillSection = document.createElement("section"),
    $skillsBoxConteiner = document.createElement("div"),
    $titleSkills = document.createElement("h6"),
    $skillsBox = document.createElement("div"),
    $ulSkills = document.createElement("ul");

  $skillSection.id = "skill-section";
  $skillSection.classList.add("conteiner");
  $skillsBoxConteiner.classList.add("skills-box-conteiner");
  $skillsBox.classList.add("skill-box");
  $titleSkills.classList.add("title-sections");
  $ulSkills.classList.add("skills-list");

  $titleSkills.innerHTML = `Habilidades`;
  $ulSkills.innerHTML = `
     <li><img class="icon-skills" src="app/assets/icons/react.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/html.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/css.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/js.svg" width="80px" height="80px"></img></li>
     <li><img class="icon-skills" src="app/assets/icons/nodejs.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/php.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/mysql.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/c.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/c++.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/java.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/git.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/trello.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/terminal.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/sass.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/jest.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/jquery.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/webpack.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/figma1.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/photoshop.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/redux.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/jira.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/githubProjects.svg" width="80px" height="80px"></img></<li>
     <li><img class="icon-skills" src="app/assets/icons/styledcomponents.svg" width="80px" height="80px"></img></<li>

     `;

  $skillSection.appendChild($titleSkills);
  $skillSection.appendChild($skillsBoxConteiner);
  $skillsBoxConteiner.appendChild($skillsBox);
  $skillsBox.appendChild($ulSkills);

  return $skillSection;
}
