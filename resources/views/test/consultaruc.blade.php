@extends('layouts.app')
@section('title','TiendaPedidos')
@section('body-class','tiendaroy-page sidebar-collapse')

@section('content')


    <div class="page-header header-filter" data-parallax="true" style="background-image: url('{{asset('/img/bg7.jpg')}}')">

    </div>
    <div class="main main-raised">
        <div class="container">
            <div class="section text-center">


                <form  method="post">
                    @csrf
                    <div class="form-row">
                        <div class="form-group col-md-12">

                                <label for="nombre">RUC</label>
                                <input type="text" class="form-control" id="ruc" name="name">
                                <button class="btn btn-info" type="button" id="btnbuscar">
                                    <i class="fa fa-search"></i>
                                    Consultar RUC
                                </button>

                        </div>
                        <div class="form-group">
                            <div class="col-md-3"></div>
                            <div class="col-md-5">
                                <small id="mensaje" style="color: red;display: none;font-size: 12pt;" >
                                    <i class="fa fa-remove"></i> El numero de RUC no es valido.
                                </small>
                            </div>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="txtruc">RUC</label>
                            <input type="text" class="form-control" id="txtruc" placeholder="ruc">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="txtrazon">Razon Social:</label>
                            <input type="text" class="form-control" id="txtrazon">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="txtestado">Estado:</label>
                            <input type="text" class="form-control" id="txtestado">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="txtdireccion">Direccion:</label>
                            <input type="text" class="form-control" id="txtdireccion">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="txtdistrito">Distrito:</label>
                            <input type="text" class="form-control" id="txtdistrito">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="txtprovincia">Provincia:</label>
                            <input type="text" class="form-control" id="txtprovincia">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="txtdepartamento">Departamento:</label>
                            <input type="text" class="form-control" id="txtdepartamento">
                        </div>
                    </div>

                </form>
            </div>
        </div>

    </div>


@include('includes.footer')

@endsection
