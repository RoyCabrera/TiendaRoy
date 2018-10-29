@extends('layouts.app')
@section('title','Listado de Productos')
@section('body-class','tiendaroy-page sidebar-collapse')

@section('content')
<div class="page-header header-filter " data-parallax="true" style="background-image: url('{{asset('/img/bg3.jpg')}}')">

  </div>
  <div class="main main-raised">
    <div class="container">
      <br>
        <h2 class="title text-center">Listado de Productos</h2>
        <p class="text-right">
          <span id="products-total">{{$products->total()}}</span> Registros | Pagina
          {{$products->currentPage()}} de
          {{$products->lastPage()}}
        </p>
        {{--<div id="alert" class=" alert alert-success"></div>--}}
        <div class="team">
          <div class="row">

           <div class="">

             <a href="{{url('admin/products/create')}}" class="btn btn-rose btn-round"><i class="material-icons">
                 add
               </i>Nuevo Producto</a>
           </div>
            <br><br><br>
            <table class="table  table-responsive table-borderless table-hover">
              <thead>
              <tr>
                <th class="text-md-center">#</th>
                <th class="text-left">Nombre</th>
                <th class="col-md-4">Descripción</th>
                <th class="text-md-center">Categoría</th>
                <th class="text-md-center">Precio</th>
                <th class="text-md-center">Opciones</th>
              </tr>
              </thead>
              <tbody>
              @foreach($products as $product)
              <tr>
                <td class="text-center">{{$product->id}}</td>
                <td>{{$product->name}}</td>
                <td>{{$product->description}}</td>
                <td>{{$product->category ? $product->category->name : 'general'}}</td>
                <td class="text-left">&#36;{{$product->price}}</td>
                <td class="td-actions text-right">
                  <form action="{{url('admin/products/'.$product->id.'/delete')}}" method="post">
                  @csrf
                  <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <a href="#" class="btn btn-info" data-toggle="tooltip"
                            data-placement="top" title="Ver Producto"><i class="material-icons">
                        remove_red_eye
                      </i></a>
                    <a href="{{url('admin/products/'.$product->id.'/edit')}}" class="btn btn-success" data-toggle="tooltip"
                            data-placement="top" title="Editar Producto"><i class="material-icons">
                        edit
                      </i></a>
                    <a href="{{url('/admin/products/'.$product->id.'/images')}}" class="btn btn-warning" data-toggle="tooltip"
                       data-placement="top" title="Imagenes del Producto"><i class="material-icons">
                        image
                      </i></a>
                    <button type="submit"  class="btn btn-danger btn-delete"><i class="material-icons">
                        delete
                      </i></button>
                  </div>
                  </form>
                </td>
              </tr>
              @endforeach
              </tbody>
            </table>

          </div>
          <div class="pagination justify-content-center">
            {{$products->links()}}
          </div>
        </div>

    </div>
  </div>
@include('includes.footer')
@endsection
