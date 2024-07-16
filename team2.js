// $(document).ready(function(){
//     $('.menu').click(function(){
//    $('.computer,.laptop,.tab,.mobile,.smobile,.cross').toggle();
// });
// // $('.cross').click(function(){
// // $('.computer,.laptop,.tab,.mobile,.smobile,.cross').hide();
// // });
//  });
$(document).ready(function(){
    // Initially hide the icons when the screen width is between 320px and 1023px
    if ($(window).width() >= 320 && $(window).width() <= 1023) {
        $('.computer, .laptop, .tab, .mobile, .smobile, .cross').hide();
        $('.menu').show();
    }

    // Toggle the visibility of icons when the menu button is clicked
    $('.menu').click(function(){
        $('.computer, .laptop, .tab, .mobile, .smobile, .cross').show();
        $('.menu').hide();
    });

    // Hide the icons when the cross button is clicked
    $('.cross').click(function(){
        $('.computer, .laptop, .tab, .mobile, .smobile, .cross').hide();
        $('.menu').show();
    });

    // Adjust the icons' visibility on window resize
    $(window).resize(function() {
        if ($(window).width() >= 320 && $(window).width() <= 1023) {
            $('.computer, .laptop, .tab, .mobile, .smobile, .cross').hide();
            $('.menu').show();
        } else {
            $('.computer, .laptop, .tab, .mobile, .smobile, .cross').show();
            $('.menu').hide();
        }
    });
});