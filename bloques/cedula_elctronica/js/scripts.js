$(function() {
    $(".selector").click(function (event) {
        $(".selector").toggleClass('seleccionado');
        $("#tab1, #tab2").toggleClass('hide');
    })
});

