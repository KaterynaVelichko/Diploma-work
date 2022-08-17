$('.about_items > div').on('click', function(){
    $(this).children('.about_icon').toggleClass('about-rotate-icon');
    $(this).children('p').toggleClass('change-color-text');
    $(this).next('.about_text').slideToggle(300);
    $(this).parent('.about_items').toggleClass('change-color');
})


$('.future_block_describe > div').on('click', function(){
    $(this).next('.future_block_text').slideToggle(300);
    $(this).children('.future_block_pretitle').toggleClass('future_block_color-change');
    $(this).parent('.future_block_describe').toggleClass('future_block_describe-change');
})


$('.about_items_block > div').on('click', function(){
    $(this).children('.about_icon').toggleClass('about-rotate-icon');
    $(this).children('p').toggleClass('change-color-text');
    $(this).next('.about_text').slideToggle(300);
    $(this).parent('.about_items_block').toggleClass('change-color');
})

