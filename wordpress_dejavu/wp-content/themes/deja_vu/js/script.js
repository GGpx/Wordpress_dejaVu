jQuery(function($) {

    $('#menu-item-51').click(function() {
        $('.amenagement > div > div > a > img').css({ opacity: 0.3 });
        $('.objet > div > div > a > img').css({ opacity: 0.3 });
        $('.scenographie > div > div > a > img').css({ opacity: 1 });

        $('.amenagement').css( 'background-color','#F0E31B' );
        $('.objet').css( 'background-color','#F0E31B' );
        $('.scenographie').css( 'background-color','transparent' );
    });

    $('#menu-item-53').click(function() {
        $('.scenographie > div > div > a > img').css({ opacity: 0.3 });
        $('.objet > div > div > a > img').css({ opacity: 0.3 });
        $('.amenagement > div > div > a > img').css({ opacity: 1 });

        $('.scenographie').css( 'background-color','#F0E31B' );
        $('.objet').css( 'background-color','#F0E31B' );
        $('.amenagement').css( 'background-color','transparent' );
        
    });

    $('#menu-item-54').click(function() {
        $('.amenagement > div > div > a > img').css({ opacity: 0.3 });
        $('.scenographie > div > div > a > img').css({ opacity: 0.3 });
        $('.objet > div > div > a > img').css({ opacity: 1 });

        $('.scenographie').css( 'background-color','#F0E31B' );
        $('.amenagement').css( 'background-color','#F0E31B' );
        $('.objet').css( 'background-color','transparent' );
    });

    $('#menu-item-164 > a').click(function() {
        $('.amenagement > div > div > a > img').css({ opacity: 1 });
        $('.scenographie > div > div > a > img').css({ opacity: 1 });
        $('.objet > div > div > a > img').css({ opacity: 1 });

        $('.objet').css( 'background-color','transparent' );
        $('.scenographie').css( 'background-color','transparent' );
        $('.amenagement').css( 'background-color','transparent' );
    });

    $( "#menu-item-164 > ul > li >a" ).hover(
        function() {
        $("#menu-item-164 > ul > li >a").css('background-color', "white");
        $(this).css('background-color', "#F3E21C");
        }
    );
    
    $(".scenographie > .elementor-widget-container > .elementor-image > a > img").hover(
        function() {            
            $(".amenagement > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(".scenographie > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(".objet > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(this).css('transform', 'scale(1.35, 1.05)');
        }
    ); 
    $(".amenagement > .elementor-widget-container > .elementor-image > a > img").hover(
        function() {            
            $(".amenagement > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(".scenographie > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(".objet > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(this).css('transform', 'scale(1.35, 1.05)');
        }
    );  
    $(".objet > .elementor-widget-container > .elementor-image > a > img").hover(
        function() {            
            $(".amenagement > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(".scenographie > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(".objet > .elementor-widget-container > .elementor-image > a > img").css('transform', 'scale(1)');
            $(this).css('transform', 'scale(1.35, 1.05)');
        }
    );     

    $("#menu-item-164 > ul > li > a").css('cursor', 'pointer');
    $("#menu-item-164 > a").css('cursor', 'pointer');


});
