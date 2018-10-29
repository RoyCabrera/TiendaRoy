@extends('layouts.app')
@section('title','Imagenes del Producto')
@section('body-class','tiendaroy-page sidebar-collapse')

@section('content')

    <style>
        .input-file-container {
            position: relative;
            width: 225px;
        }
        .js .input-file-trigger {
            display: block;
            padding: 14px 45px;
            background: #39D2B4;
            color: #fff;
            font-size: 1em;
            transition: all .4s;
            cursor: pointer;
            border-radius: 20px;
        }
        .js .input-file {
            position: absolute;
            top: 0; left: 0;
            width: 225px;
            opacity: 0;
            padding: 14px 0;
            cursor: pointer;
        }
        .js .input-file:hover + .input-file-trigger,
        .js .input-file:focus + .input-file-trigger,
        .js .input-file-trigger:hover,
        .js .input-file-trigger:focus {
            background: #34495E;
            color: #39D2B4;
        }

        .file-return {
            margin: 0;
        }
        .file-return:not(:empty) {
            margin: 1em 0;
        }
        .js .file-return {
            font-style: italic;
            font-size: .9em;
            font-weight: bold;
        }
        .js .file-return:not(:empty):before {
            content: "Imagen seleccionada: ";
            font-style: normal;
            font-weight: normal;
        }


        /* Useless styles, just for demo styles */

        body {
            font-family: "Open sans", "Segoe UI", "Segoe WP", Helvetica, Arial, sans-serif;
            color: #7fa0aa;
        }

        .subir {
            width: 307px;

            text-align:center;
        }


    </style>

    <div class="page-header header-filter " data-parallax="true" style="background-image: url('{{asset('/img/bg3.jpg')}}')">

    </div>
    <div class="main main-raised">
        <div class="container">
            <div class="section">
                <h2 class="title text-center">Imagenes del Producto "{{$product->name}}"</h2>

                    <form method="post" action="" enctype="multipart/form-data">
                     @csrf
                        <div class="input-file-container subir">
                            <input class="input-file" id="my-file" type="file" name="photo" required>
                            <label tabindex="0" for="my-file" class="input-file-trigger">Subir imagen...</label>
                        </div>

                        <p class="file-return"></p>
                        <button type="submit" class="btn btn-round btn-rose">
                            guardar</button>
                        <a href="{{url('/admin/products')}}" class="btn btn-round btn-default">
                            Cancelar</a>
                    </form>



                <div class="row">
                    @foreach($images as $image)
                        <div class="col-md-4">
                            <div class="card-deck">
                                <div class="card">
                                    <img class="card-img-top" src="{{$image->url}}" alt="Card image cap"  height="320px">
                                    <form method="post" action="">
                                        @csrf
                                        @method('DELETE')
                                        <input type="hidden" name="image_id" value="{{$image->id}}">
                                        <button type="submit" class="btn btn-danger btn-block btn-round">
                                            <i class="material-icons">delete</i> Eliminar imagen</button>
                                            @if($image->featured)
                                            <button type="button" rel="tooltip" title="Imagen Destacada"
                                                    class="btn btn-success btn-block btn-round ">
                                                <i class="material-icons">favorite</i>

                                            </button>
                                            @else
                                            <a href="{{url('admin/products/'.$product->id.'/images/select/'.$image->id)}}"
                                               class="btn btn-info btn-block btn-round text-white">
                                                <i class="material-icons">favorite</i> Destacar Imagen
                                            </a>
                                            @endif
                                    </form>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    @include('includes.footer')
    <script>
        document.querySelector("html").classList.add('js');

        var fileInput  = document.querySelector( ".input-file" ),
            button     = document.querySelector( ".input-file-trigger" ),
            the_return = document.querySelector(".file-return");

        button.addEventListener( "keydown", function( event ) {
            if ( event.keyCode == 13 || event.keyCode == 32 ) {
                fileInput.focus();
            }
        });
        button.addEventListener( "click", function( event ) {
            fileInput.focus();
            return false;
        });
        fileInput.addEventListener( "change", function( event ) {
            the_return.innerHTML = this.value;
        });
    </script>
@endsection
