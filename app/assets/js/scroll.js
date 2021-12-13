
var base = window.pageYOffset;

scroll();

function scroll(){

    addEventListener("scroll", () =>{

        var posicion1 = window.pageYOffset;
        
        const nav = document.querySelector(".nav-conteiner");

        if(posicion1 > base || posicion1 === base){   
            
            nav.classList.add("down");
             
            base = posicion1;
            
        }else if(base > posicion1){
            nav.classList.remove("down");
    
            base = posicion1;
    
        }   
    
    });


    

}

