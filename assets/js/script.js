$(document).ready(function(){
    $('#photo > img').mouseover(function() {
        $('#photo > img').css('display', 'none');
        $('#gd-photo').css('display', 'block')
    });
    $('#gd-photo').mouseout(function() {
        $('#photo > img').css('display', 'block');
        $('#gd-photo').css('display', 'none')
    });
    $('.inactive').nextUntil('.inactive').css('display', 'none');
    $('h2').on('click', function() {
        $(this).toggleClass('inactive');
        $(this).nextUntil('h2').fadeToggle(500, 'linear');
    });
    $('.comp h3').on('click', function() {
        $(this).toggleClass('inactive');
        $(this).nextUntil('.comp h3').fadeToggle(500, 'linear');
    });
    

})