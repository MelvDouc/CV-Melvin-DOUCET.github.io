$(document).ready(function(){
    // $('.inactive').nextUntil(this).css('display', 'none');
    $('.comp h3').on('click', function() {
        $(this).toggleClass('inactive');
        $(this).nextUntil(this).fadeToggle(500, 'linear');
    });
});