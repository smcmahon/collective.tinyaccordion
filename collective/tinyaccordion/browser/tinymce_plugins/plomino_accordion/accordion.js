jQuery(function ($) {

    $("#content-core h3.plomino-accordion-header").each( function (index) {
        var jqt = $(this),
            body = jqt.next('div.plomino-accordion-content'),
            expand_css = index === 0 ? 'expanded': 'collapsed';

        body.addClass(expand_css);
        if (index !== 0) {
            jqt.next().hide();
        }
        jqt.addClass(expand_css);

        jqt.click(function (event) {
			event.preventDefault();
            var jqt = $(this),
                body = jqt.next('div.plomino-accordion-content');
            if (jqt.hasClass('expanded')) {
                jqt.removeClass('expanded').addClass('collapsed');
                body.removeClass('expanded').addClass('collapsed').slideUp();
            } else {
                jqt.removeClass('collapsed').addClass('expanded');
                body.removeClass('collapsed').addClass('expanded').slideDown();
            }
        });
    });
});
