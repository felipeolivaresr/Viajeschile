$(document).ready(function () {



    $(".Toggleoff").click(function () {
        $(".cubo").toggle();




    });

    $("img").each(function () {
        var $this = $(this);
        $this.data('originalWidth', $this.width());
        $this.data('originalHeight', $this.height());
    });

    $("img").click(function () {
        var $this = $(this);
        var originalWidth = $this.data('originalWidth');
        var originalHeight = $this.data('originalHeight');

        $this.animate({
            width: "300px",
            height: "300px",
            opacity: 0.5
        }, 1000, function () {
            // Volver a las propiedades originales
            $this.animate({
                width: originalWidth,
                height: originalHeight,
                opacity: 1
            }, 1000);
        });
    });


    $(".send").click(function () {
        alert("Su mensaje fue enviado correctamente...");
    });


});