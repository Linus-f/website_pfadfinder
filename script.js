// $('.portfolio-item').isotope({
//  	itemSelector: '.item',
//  	layoutMode: 'fitRows'
//  });
$('.portfolio-menu > .btn').click(function(){
    $('.portfolio-menu div').removeClass('active');
    $('.portfolio-menu div button').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
});

$('.portfolio-menu div ul li').click(function () {
    $('.portfolio-menu div').removeClass('active');
    $('.portfolio-menu div button').removeClass('active');
    this.parentElement.previousElementSibling.classList.add('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
});

$('.portfolio-menu div button:not(.dropdown-toggle)').click(function () {
    $('.portfolio-menu div').removeClass('active');
    $('.portfolio-menu div button').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
});

$(document).ready(function() {
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        type : 'image',
        gallery : {
            enabled : true,
            tCounter: '%curr% von %total%'
        },

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        },
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
    });

    $('.portfolio-item').isotope({
        layoutMode: 'masonry'
    });
});
