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
                translate: '-' + ($(this).width() / 12 ) + 'px, -' + ($(this).width() * 0.24) + 'px',
                rotate3d: '0,0,1,0deg'
            });
            $(this).children('.alt').animate({
                top: '130px'
            });
            $(this).addClass('square');
        },
        function(){
            $(this).parent().stop().transition({
                rotate3d: '0,0,1,-' + degrees + 'deg'
            });
            $(this).parent().parent().stop().transition({
                translate: '-' + ($(this).width() / 12 ) + 'px, -' + ($(this).width() * 0.24) + 'px',
                rotate3d: '0,0,1,' + degrees + 'deg'
            });
            $(this).children('.alt').animate({
                top: '155px'
            });
            $(this).removeClass('square');
        }
    );
    
    $('article').trigger('mouseleave'); 
});