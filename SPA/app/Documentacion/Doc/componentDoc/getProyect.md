# getProyect


This component contains ajax function that will show cards of projects into main view and project view.

```
    await ajax({
        url: urlProyects,
        cbSuccess: (proyects) =>{
            console.log(proyects);
            proyects.forEach(proyect => {

               element.appendChild(ProyectsCards(proyect));
            });

        }

    });

```

### Problem with this function?

- For the moment, i was not able to show diferent amount of card depending of view, so i "fixed" it temporaly doing a duplication of data and handle it using the hash. In a future just one file that have projects cards.

```
    // define a variable for save url
    let urlProyects = ``;

    // if someone is in main view it will show only 3 cards
    if(!hash || hash === "#/"){
        urlProyects = `app/assets/json/DataProjectIntroduction.json`
    }

    // if someone is in project view it will show only all cards
    if(hash === "#/proyectos"){
        urlProyects = `app/assets/json/proyects.json`
    }

```
