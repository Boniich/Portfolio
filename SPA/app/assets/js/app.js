


var base = window.pageYOffset;
var contador = 1;

scroll();

function scroll(){

    addEventListener("wheel", () =>{

        // console.log("evento activado");
        var posicion1 = window.pageYOffset;
        var nuevaPos = 0;
        
        console.log("pos",posicion1);
        console.log("base",base);
        const nav = document.querySelector(".nav-conteiner");
        
        if(posicion1 === 0 && base === 0)return false;
    
        if(posicion1 > base || posicion1 === base){   
    
            console.log("activa el evento por primera vez");
        
             nav.classList.add("down");
    
            base = posicion1;
            // base = posicion1;
            // console.log("nueva posicion", nuevaPos);
            
        }else if(base > posicion1 || contador == 1){
            nav.classList.remove("down");
    
            base = posicion1;
            contador = 0;
    
        }   
    
    });


    

}

