$(document).ready(function(){
    $('.inactive').nextUntil(this).css('display', 'none');
    $('h2, .comp h3').on('click', function() {
        $(this).toggleClass('inactive');
        $(this).nextUntil(this).fadeToggle(500, 'linear');
    });
});