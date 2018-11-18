@extends('layouts.app')
@section('title','TiendaRoy | Dashboard')
@section('body-class','tiendaroy-page sidebar-collapse')
@section('content')
    <div class="page-header header-filter " data-parallax="true" style="background-image: url('{{asset('/img/bg2.jpg')}}')">
    </div>
    <div class="main main-raised">
        <div class="container">
            <div class="text-center"><br>
                <h2 class="title">Dashboard</h2>

                <br>
                @if (session('NotificacionPedido'))
                    <div class="alert alert-success" role="alert">
                        {{ session('NotificacionPedido') }}
                    </div>
                @endif

                <ul class="nav nav-pills  nav-pills-icons nav-pills-warning" role="tablist">
                    <!--
                        color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
                    -->
                    <li class="nav-item">
                        <a class="nav-link active" href="#dashboard-1" role="tab" data-toggle="tab">
                            <i class="material-icons">dashboard</i>
                            Carrito de compras
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#tasks-1" role="tab" data-toggle="tab">
                            <i class="material-icons">list</i>
                            Mis Pedidos
                        </a>
                    </li>
                </ul>
                <div class="tab-content tab-space">
                    <div class="tab-pane active " id="dashboard-1">
                            <div class="row">
                                <div class="col-12">
                                    <p class="text-left">Total de productos en el carrito
                                    <span id="idcarrito" class="badge badge-dark">{{auth()->user()->cart->details->count()}}</span>
                                    </p>
                                    <table class="table table-responsive-md table-hover">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">SubTotal</th>
                                            <th scope="col">Opciones</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach(auth()->user()->cart->details as $detail)
                                        <tr>
                                            <td class="">
                                                <img src="{{$detail->product->featured_image_url}}" height="50">
                                            </td>
                                            <td>
                                                <a href="{{url('/products/'.$detail->product->id)}}">{{$detail->product->name}}</a>
                                            </td>
                                            <td class="">&#36;{{$detail->product->price}}</td>
                                            <td class="">{{$detail->quantity}}</td>
                                            <td class="">&#36;{{$detail->quantity * $detail->product->price}}</td>
                                            <td class="td-actions">
                                                <form action="{{url('/cart')}}" method="post">
                                                    @csrf
                                                    @method('DELETE')
                                                    <input type="hidden" name="cart_detail_id" value="{{$detail->id}}">
                                                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                        <a href="{{url('/products/'.$detail->product->id)}}" target="_blank" class="btn btn-info" data-toggle="tooltip"
                                                           data-placement="top" title="Ver Producto">
                                                            <i class="material-icons">
                                                                remove_red_eye
                                                            </i>
                                                        </a>
                                                        <button type="submit"  class="btn btn-danger btn-delete-cart">
                                                            <i class="material-icons">
                                                                delete
                                                            </i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </td>

                                        </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                    <form action="{{url('/order')}}" method="post">
                                        @csrf
                                        <button type="submit" class="btn btn-round btn-warning">
                                            <i class="material-icons">done</i>
                                            Realizar pedido
                                        </button>
                                    </form>
                                </div>
                            </div>

                    </div>
                    <div class="tab-pane" id="tasks-1">
                        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                        <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
                    </div>
                </div>
            </div>
        </div>

    </div>
@include('includes.footer')

@endsection

