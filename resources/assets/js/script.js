$(document).ready(function () {

    //$('#alert').hide();
    $('.btn-delete').click(function (e) {
        e.preventDefault();
        if(!confirm("¿Está seguro de eliminar el producto definitivamente?"))
        {
            return false;
        }

        var row =$(this).parents('tr');
        var form=$(this).parents('form');
        var url =form.attr('action');

        //$('#alert').show();

        $.post(url,form.serialize(),function (result) {
            row.fadeOut();
            $('#products-total').html(result.total);
            //$('#alert').html(result.message);

            toastr.success().html(result.mensaje);//mensaje
        }).fail(function () {
            toastr.error('algo salió mal ')
        });
    });


    //$('#alert').hide();
    $('.btn-delete-cart').click(function (e)
    {
        e.preventDefault();
        if(!confirm("¿Está seguro de eliminar el producto del carrito?"))
        {
            return false;
        }

        var row =$(this).parents('tr');
        var form=$(this).parents('form');
        var url =form.attr('action');

        //$('#alert').show();

        $.post(url,form.serialize(),function (result)
        {
            row.fadeOut();
            $('#idcarrito').html(result.totalcarrito);
            toastr.info().html(result.mensaje);

        }).fail(function ()
        {
            toastr.error('algo salió mal ')
        });
    });



});