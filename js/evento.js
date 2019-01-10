$(function() {
   
   var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt')
            /*css = {
                'maxWidth': $(window).width()-300,
                'maxHeight': $(window).height()
            };*/
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        //$lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
        //var width = $img.width() - 30;
        
        //$lightbox.find('.modal-dialog').css({'width': auto});
        $lightbox.find('.close').removeClass('hidden');
    });
});