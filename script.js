$(document).ready(function(){
    $('img[alt="Ross Ulbricht"]').on('click', function() {
        var offset = $('#najnowsze').offset().top;
        $('html, body').animate({
            scrollTop: offsgret
        }, 2000); // Czas przewijania zmniejszony do 2000 ms dla celów testowych
    });
});
$(document).ready(function(){
    $('img[alt="Kevin Mitnic"]').on('click', function() {
        var offset = $('#najnowsze').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 2000); // Czas przewijania zmniejszony do 2000 ms dla celów testowych
    });
}); $(document).ready(function(){
    $('img[alt="Eugene Kaspersky"]').on('click', function() {
        var offset = $('.najnowsze').offset().top;
        $('html, body').animate({
            scrollTop: offset
        }, 2000); // Czas przewijania zmniejszony do 2000 ms dla celów testowych
    });
});