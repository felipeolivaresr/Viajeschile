$(document).ready(function () {



    $(".Toggleoff").click(function () {
        $(".cubo").toggle();




    });

    $("#img1").each(function () {
        var $this = $(this);
        $this.data('originalWidth', $this.width());
        $this.data('originalHeight', $this.height());
    });

    $("#img1").click(function () {
        var $this = $(this);
        var originalWidth = $this.data('originalWidth');
        var originalHeight = $this.data('originalHeight');

        $this.animate({
            width: "300px",
            height: "300px",
            opacity: 0.2
        }, 1000, function () {
          
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