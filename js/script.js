$(window).on('load resize', function () {
    if ($(window).width() < 1024) {
        window.location = "./www/index.html"
    }
});