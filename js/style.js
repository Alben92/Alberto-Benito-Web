$(document).ready(function(){

	 /*CURSOR*/
	const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px; display:block")
    })
    document.addEventListener('click', () => {
        cursor.classList.add("cursorExpand");

        setTimeout(() => {
            cursor.classList.remove("cursorExpand");
        }, 500)
    });
  

    /* MENU OPEN RESPONSIVE*/
    var anchoCompleto = screen.width;
    var margenLeft = "-30%";

    $('.MenuOpen').on('click', function() {
    	$('#header').animate({
    		marginLeft: 0,
    		width: anchoCompleto,
    	}, 500, function(){
    		$('#header').css({"z-index": "99999"});
    	});
    });

    $('.MenuClose').on('click', function() {
    	$('#header').animate({
    		marginLeft: margenLeft,
    		width: 0,
    	}, 500, function(){
    		$('#header').css({"z-index": "1"});
    	});
    });

    //Galeria IMAGENES
    var num = 1;
    $('#atrasImagen').on('click', function(){
        num--;
        if(num < 1){
            num = 10;
        };
        var foto=document.getElementById('foto');
        foto.src="images/Galeria/foto"+num+".jpg";
    });

    $('#adelanteImagen').on('click', function(){
        num++;
        if(num > 10){
            num = 1;
        };
        var foto=document.getElementById('foto');
        foto.src="images/Galeria/foto"+num+".jpg";
    });

    $('.VerGaleria').on('click', function(){
        $('#popUp').css({"display": "block"});
        $('.overlay').css({"display": "block"});
    });

    $('.closeButton').on('click', function(){
        $('#popUp').css({"display": "none"})
        $('.overlay').css({"display": "none"})
    });

    


    /* EVENTOS SCROOL */
	$(window).scroll( function(){
        /* FLECHA UP */
        if($(window).scrollTop() < 300){
            $('.Flecha-Up').css('opacity', '0');
        }else{
            $('.Flecha-Up').css('opacity', '1');
        };

        $('.Flecha-Up').click(function(){
            $(window).scrollTop(0).slideDown("slow");
        });

		/*FadeIN elementos */
	 	$('.Fade-In').each( function(i){
			var top_of_element = $(this).offset().top;
		    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
		    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
		    var top_of_screen = $(window).scrollTop();
            
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                $(this).animate({'opacity':'1'},800); 
            };
        });

	 	/*BARRA PROGRESO */
        $('.barra').each( function(i){
			var top_of_elementIdiomas = $(this).offset().top;
		    var bottom_of_elementIdiomas = $(this).offset().top + $(this).outerHeight();
		    var bottom_of_screenIdiomas = $(window).scrollTop() + $(window).innerHeight();
		    var top_of_screenIdiomas = $(window).scrollTop();
            
            if ((bottom_of_screenIdiomas > top_of_elementIdiomas) && (top_of_screenIdiomas < bottom_of_elementIdiomas)){
                $('.Html_Skills').animate({'width': 95+'%'},800);
                $('.Photoshop_Skills').animate({'width': 90+'%'},800);
                $('.Illustrator_Skills').animate({'width': 80+'%'},800);
                $('.Javascript_Skills').animate({'width': 75+'%'},800);
                $('.Jquery_Skills').animate({'width': 85+'%'},800);
                $('.Angular_Skills').animate({'width': 70+'%'},800);
                $('.Wordpress_Skills').animate({'width': 80+'%'},800);
                $('.UXUI_Skills').animate({'width': 80+'%'},800);
            };
        });    	
        

	});

	    
});