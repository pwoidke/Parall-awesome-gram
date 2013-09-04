$(document).ready(function(){
    var items = document.getElementsByTagName('article')
    for(i = 0, l = items.length; i < l; i++){
            new Maskew(items[i], 15, { touch: false, anchor: 'bottom', showElement: 'inline-block' });
        }
        
    $('article').hover(
        function(){
            $(this).parent().stop().transition({
                rotate3d: '0,0,1,0deg'
            });
            $(this).parent().parent().stop().transition({
                translate: '0px, -97px',
                rotate3d: '0,0,1,0deg'
            });
            $(this).addClass('square');
        },
        function(){
            $(this).parent().stop().transition({
                rotate3d: '0,0,1,-15deg'
            });
            $(this).parent().parent().stop().transition({
                translate: '0px, -97px',
                rotate3d: '0,0,1,15deg'
            });
            $(this).removeClass('square');
        });
});