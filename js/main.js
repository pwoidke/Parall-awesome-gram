var degrees = 15;

$(document).ready(function(){
    var items = document.getElementsByTagName('article')
    for(i = 0, l = items.length; i < l; i++){
        new Maskew(items[i], degrees, { touch: false, anchor: 'bottom', showElement: 'inline-block' });
    }
    
    $('article').hover(
        function(){
            $(this).parent().stop().transition({
                rotate3d: '0,0,1,0deg'
            });
            $(this).parent().parent().stop().transition({
                translate: '-' + (degrees * 1.65) + 'px, -' + (degrees * 4.8) + 'px',
                rotate3d: '0,0,1,0deg'
            });
            $(this).children('.alt').stop().animate({
                bottom: parseInt($('.alt').parent().css('height'),10) - parseInt($('.maskew').css('height'),10) + 'px'
            });
            $(this).addClass('square');
        },
        function(){
            $(this).parent().stop().transition({
                rotate3d: '0,0,1,-' + degrees + 'deg'
            });
            $(this).parent().parent().stop().transition({
                translate: '-' + (degrees * 1.65) + 'px, -' + (degrees * 4.8) + 'px',
                rotate3d: '0,0,1,' + degrees + 'deg'
            });
            $(this).children('.alt').stop().animate({
                bottom: '0px'
            });
            $(this).removeClass('square');
        }
    );
    
    $('article').trigger('mouseleave'); 
});