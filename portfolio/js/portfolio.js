$(document).ready(function () {
    $("#sticker").sticky({topSpacing: 0});

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 1,
        navs: true
    })
});


var scroll = new SmoothScroll('a[href*="#"]');


(function () {
    var $projects = $('.gallery');

    $projects.isotope({
        itemSelector: 'item1'
    });

    $('ul.category-list').on('click', 'li', function (e) {
        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.category-list > li').removeClass('ac');
        $(this).addClass('ac');

        $projects.isotope({filter: filter});
    });
})(jQuery);


