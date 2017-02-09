//TODO - VERIFY IF THIS FILE IS REQUIRED
Ember.$(document).ready(function($) {

    /***** Alter bootstrap dropdowns to slide *****/
    Ember.$('.dropdown').on('show.bs.dropdown', function() {
        Ember.$(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    });
    Ember.$('.dropdown').on('hide.bs.dropdown', function() {
        Ember.$(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });
    /***** End bootstrap sliding dropdowns *****/

    /***** Init all owl carousels ******/
    Ember.$('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true
    });
    /**** Init all fancybox media/video players ****/
    Ember.$('.fancybox-media').fancybox({
        fitToView: true,
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
        	media: {}
        }
    });

    /**** When heights need to match and flexbox not an option, add a class
    or 'match-me' to both elements ****/
    Ember.$('.match-me').matchHeight();
});
