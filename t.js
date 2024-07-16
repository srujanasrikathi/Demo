$(document).ready(function() {
    $('#menuButton').click(function() {
        $('#components').toggle();
    });

    $('#cross').click(function() {
        $('#computer, #laptop, #tab, #mobile, #smobile').hide();
    });
});
