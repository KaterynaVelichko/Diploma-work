$('.about_items > div').on('click', function(){
    $(this).children('.about_icon').toggleClass('about-rotate-icon');
    $(this).next('.about_text').slideToggle(300);
    $(this).parent('.about_items').toggleClass('change-color');
})