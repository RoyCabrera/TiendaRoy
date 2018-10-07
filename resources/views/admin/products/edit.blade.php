@extends('layouts.app')
@section('title','TiendaPedidos')
@section('body-class','tiendaroy-page sidebar-collapse')

@section('content')
<div class="page-header header-filter" data-parallax="true" style="background-image: url('{{asset('/img/bg7.jpg')}}')">

  </div>
  <div class="main main-raised">
    <div class="container">
      <div class="section text-center">
        <h2 class="title text-rose">Editar producto seleccionado</h2>
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
        <form action="{{url('admin/products/'.$product->id.'/edit')}}" method="post">
          @csrf
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="nombre">Nombre del producto</label>
              <input type="text" class="form-control" id="nombre"
                     name="name" value="{{old('name',$product->name)}}">
            </div>
            <div class="form-group col-md-6">
              <label for="precio">Precio del Producto</label>
              <input type="number" class="form-control" step="0.01" id="precio"
                     name="price" value="{{old('price',$product->price)}}">
            </div>
            <div class="form-group col-md-12">
              <label for="descr">Descripcion corta del producto</label>
              <input type="text" class="form-control" id="descr"
                     name="description" value="{{old('description',$product->description)}}">
            </div>
          </div>

          <div class="form-group">
            <label for="exte">Descripcion extensa del producto</label>
            <textarea class="form-control" id="exte" name="long_description">
              {{old('long_description',$product->long_description)}}
            </textarea>
          </div>


          <button  class="btn  btn-rose btn-round">guardar cambios</button>
          <a href="{{url('admin/products  ')}}" class="btn btn-default btn-round">Cancelar</a>

        </form>
      </div>
    </div>

    </div>
@include('includes.footer')

@endsection
