@extends('layouts.app')
@section('title','TiendaPedidos')
@section('body-class','tiendaroy-page sidebar-collapse')

@section('content')
<div class="page-header header-filter " data-parallax="true" style="background-image: url('{{asset('/img/bg2.jpg')}}')">

  </div>
  <div class="main main-raised">
    <div class="container">
      <div class="section text-center">
        <h2 class="title">Registrar nuevo producto</h2>

        @if($errors->any())
          <div class="alert alert-danger text-left">
            <ul>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true"><i class="material-icons">clear</i></span>
              </button>
              @foreach($errors->all() as $error)
              <li>{{$error}}</li>
              @endforeach
            </ul>
          </div>
        @endif
        <form action="{{url('admin/products')}}" method="post">
          @csrf
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Nombre del producto</label>
              <input type="text" class="form-control" id="inputEmail4" name="name" value="{{old('name')}}">
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress">Precio del Producto</label>
              <input type="number" class="form-control" step=".01" id="inputAddress" name="price" value="{{old('price')}}">
            </div>
            <div class="form-group col-md-12">
              <label for="inputPassword4">Descripcion corta del producto</label>
              <input type="text" class="form-control" id="inputPassword4" name="description" value="{{old('description')}}">
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress2">Descripcion extensa del producto</label>
            <textarea class="form-control" id="inputAddress2" name="long_description">
              {{old('long_description')}}
            </textarea>
          </div>


          <button  class="btn btn-success btn-round">Registrar</button>
          <a href="{{url('admin/products  ')}}" class="btn btn-default btn-round">Cancelar</a>

        </form>
      </div>
    </div>

    </div>

@include('includes.footer')
@endsection
