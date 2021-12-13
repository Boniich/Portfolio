# DataProjects

This file contains all data about project (images, titles, tag, etc)

### Problem in this file

- Duplication of data, information about tags (html,css, js, etc) is duplicat in each object.

```
  {
    "id": 3,
    "name": "CopyTedBlog",
    "img": "app/assets/img/3.jpg",
    "description": "Copia de TedBlog, usando WordPress API",
    "url": "",
    "tag":[
      {
        "idtag": "html",
        "classtag": "skills-proyects",
        "tagname": "Html"
      },{

        "idtag": "css",
        "classtag": "skills-proyects",
        "tagname": "Css"
      },{
  

        "idtag": "js",
        "classtag": "skills-proyects",
        "tagname": "JavaScript"
      }
      

    ]
  
  },
  {
    "id": 4,
    "name": "CopyTedBlog",
    "img": "app/assets/img/3.jpg",
    "description": "Copia de TedBlog, usando WordPress API",
    "url": "",
    "tag":[
      {
        "idtag": "html",
        "classtag": "skills-proyects",
        "tagname": "Html"
      },{

        "idtag": "css",
        "classtag": "skills-proyects",
        "tagname": "Css"
      },{
  

        "idtag": "js",
        "classtag": "skills-proyects",
        "tagname": "JavaScript"
      }
      

    ]
```

### what can be improved?

Is posible deleted duplication of each given at each tag one unique id in another JSON create for it, putting that id in this file and finding some way to show it correctly.
