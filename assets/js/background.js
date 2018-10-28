$( document ).ready(function() {


// MATERIALIZE INICIALIZACIONES
$(".dropdown-trigger").dropdown();
$('.sidenav').sidenav();
 $('.fixed-action-btn').floatingActionButton({
    direction: 'top'
  });

// MOVER BACKGROUND EN HORIZONTAL
	$(function(){
	    var x = 0;
	    setInterval(function(){
	        x-=1;
	        $('body').css('background-position', x + 'px 0');
	    }, 30);
	})

// TRANSICIÓN DE INICIO
$("#logo").animate({opacity: '0.0'});
$("#logo").delay(2400).animate({opacity: '1.0'});


});