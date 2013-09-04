$(document).ready(function(){
    var items = document.getElementsByTagName('article')
    for(i = 0, l = items.length; i < l; i++){
            new Maskew(items[i], 15, { touch: false, anchor: 'bottom', showElement: 'inline-block' });
        }
        
    $('article').click(function(){
        if($(this).hasClass('square'))
        {
            $(this).parent().transition({
                rotate3d: '0,0,1,-15deg'
            });
            $(this).parent().parent().transition({
                translate: '0px, -97px, 0px',
                rotate3d: '0,0,1,15deg'
            });
            $(this).removeClass('square');
        }
        else
        {
            $(this).parent().transition({
                rotate3d: '0,0,1,0deg'
            });
            $(this).parent().parent().transition({
                translate: '0px, -97px, 0px',
                rotate3d: '0,0,1,0deg'
            });
            $(this).addClass('square');
        }
    });
});