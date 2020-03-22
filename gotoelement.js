$('*').each(function () {
    $(this).click(function () {
        var target = $(this).attr('data-goto-target');
        if (target != undefined) {
            var duration = $(this).attr('data-goto-duration');
            var top = $(target).offset().top;
            $('html, body').stop().animate({ scrollTop: top }, parseInt(duration));
        }
    });
});

$(window).on('mousewheel', function () {
    $('*').each(function () {
        $(this).stop();
    })
});