$(document).ready(function() {

	$('#top-scroll').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });

    $(".category-block").click(function () {
        $(this).toggleClass('active');
        if ( $('.category-block').not(this).hasClass("active") ){
            $('.category-block').not(this).removeClass("active");
        }
    });

    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop(),
        sticky = $('#top-scroll'),
        b = $('body');

    if ( scroll >= 900) {
        sticky.addClass('is-show');
    } else {
        sticky.removeClass('is-show');
    }
});