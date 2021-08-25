$(document).ready(function(){

  var imgItems = $('.slider-list li').length;

  var imgPos = 1;

  for(contar = 1; contar <= imgItems; contar++){

    console.log(contar);

    $('.pagination').append('<li><span class="fa fas fa-circle"></span></li>');
  }

  $('.slider-list li').hide();
  $('.slider-list li:first').show();
  $('.pagination li').css({'color': '#858585'});
  $('.pagination li:first').css({'color': '#1b9bff'});


  //Declaracion de FUNCIONES

  $('.pagination li').click(pagination);


  //iterador

 setInterval(function(){

   nextSlider();
  }, 5000);


  //FUNCIONES

  function pagination(){

    var paginationPos = $(this).index() +1;

    $('.slider-list li').hide();
    $('.slider-list li:nth-child('+paginationPos+')').fadeIn();


    $('.pagination li').css({'color': '#858585'});
    $(this).css({'color':'#1b9bff'});

    imgPos = paginationPos;



  }

  

      function nextSlider(){
        if(imgPos>=imgItems){

            imgPos=1;
        }else{

          imgPos++;
        }

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+imgPos+')').css({'color':'#1b9bff'});

        $('.slider-list li').hide();
        $('.slider-list li:nth-child('+imgPos+')').fadeIn();

      }
});
