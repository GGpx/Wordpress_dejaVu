jQuery(function($) {

    $('#menu-item-51').click(function() {
        $('.amenagement').css({ opacity: 0.3 });
        $('.objet').css({ opacity: 0.3 });
        $('.scenographie').css({ opacity: 1 });
    });

    $('#menu-item-53').click(function() {
        $('.scenographie').css({ opacity: 0.3 });
        $('.objet').css({ opacity: 0.3 });
        $('.amenagement').css({ opacity: 1 });
    });

    $('#menu-item-54').click(function() {
        $('.amenagement').css({ opacity: 0.3 });
        $('.scenographie').css({ opacity: 0.3 });
        $('.objet').css({ opacity: 1 });
    });

    $('#menu-item-164 > a').click(function() {
        $('.amenagement').css({ opacity: 1 });
        $('.scenographie').css({ opacity: 1 });
        $('.objet').css({ opacity: 1 });
    });
});
