@extends('layouts.app')
@section('title','Prueba con Vue')
@section('body-class','tiendaroy-page sidebar-collapse')

@section('content')

    <div class="page-header header-filter " data-parallax="true" style="background-image: url('{{asset('/img/bg3.jpg')}}')">

    </div>
    <div class="main main-raised">
        <div class="container">
            <div class="section">
                <div class="team">
                    <div id="crud" class="row">
                        <div class="col-xs-12">
                            <h1 class="page-header">CRUD Laravel Y VUEjs</h1>
                        </div>
                        <div class="col-sm-7">
                            <a href="#" class="btn btn-info pull-right">Nuevo Producto</a>
                            <table class="table table-striped table-responsive-lg">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Producto</th>
                                    <th colspan="2">&nbsp</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="pr in pro">
                                    <td width="10px">@{{ pr.id }}</td>
                                    <td>@{{ pr.name }}</td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-warning btn-sm">Editar</a>
                                    </td>
                                    <td width="10px">
                                        <a href="#" class="btn btn-danger btn-sm"
                                           v-on:click.prevent="deleteProducts(pr)">Eliminar</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@include('includes.footer')
@endsection