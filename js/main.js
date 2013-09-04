$(document).ready(function(){
    var items = document.getElementsByTagName('article')
    for(i = 0, l = items.length; i < l; i++){
            new Maskew(items[i], 12, { touch: true });
        }
        
    $('article').click(function(){
        var $maskew = $(this).maskew(0);
        //var html = $(this).html().trim();
        //$(this).parent().parent().parent().parent().append(html);
        //$(this).parent().parent().parent().remove();
    });
});