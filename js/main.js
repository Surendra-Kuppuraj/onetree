$(document).ready(function(){
    $(window).scroll(function(){       
        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('fixed-top');

        }
        if ($(window).scrollTop() < 971) {
            $('.navbar').removeClass('fixed-top');
        }
    });  
});


