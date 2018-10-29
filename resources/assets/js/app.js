
new Vue({

    el:'#crud',
    created:function()
    {
        this.getProducts();
    },
    data: {

        pro:[]

    },
    methods:{

        getProducts:function () {
            var urlproductos='test/data';
            axios.get(urlproductos).then(response =>{
                this.pro=response.data
            });
        },
        deleteProducts:function (pr) {
            //alert(pr.id);
            var url='test/data/'+ pr.id;
            axios.delete(url).then(response =>{//eliminar
               this.getProducts();//listar

                toastr.options = {//opciones de Toastr js
                    "closeButton": true,
                    "debug": false,
                    "newestOnTop": false,
                    "progressBar": true,
                    "positionClass": "toast-bottom-right",
                    "preventDuplicates": false,
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                }
               toastr.success('Eliminado correctamente '+pr.name);//mensaje


            });
        }
    }

});