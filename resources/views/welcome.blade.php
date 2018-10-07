@extends('layouts.app')
@section('title','TiendaPedidos')
@section('body-class','landing-page sidebar-collapse')

@section('content')
<div class="page-header header-filter " data-parallax="true" style="background-image: url('{{asset('/img/bg2.jpg')}}')">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="title">Mi Tienda con Laravel</h1>
          <h4>Realiza Pedidos en linea y recibe notificaciones mediante correo electronico</h4>
          <br>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="btn btn-danger btn-raised btn-lg">
            <i class="fa fa-play"></i> Ver Video
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="main main-raised">
    <div class="container">
      <div class=" text-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="title">¿Por qué TiendaPedidos?</h2>
            <h5 class="description">Somos una tienda con muchos años de servicio
            y estamos dispuestos a cumplir todas las espectativas de nuestros clientes
            </h5>
          </div>
        </div>
        <div class="features">
          <div class="row">
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-info">
                  <i class="material-icons">chat</i>
                </div>
                <h4 class="info-title">Atendemos tus dudas</h4>
                <p>Atendemos todas tus dudas mediante nuestro chat personalizado,no te
                  sentiras solo en tus compras</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-success">
                  <i class="material-icons">verified_user</i>
                </div>
                <h4 class="info-title">Pago Seguro</h4>
                <p>Paga sin problemas y olvidate de la inseguridad en TiendaPedidos nos
                  hacemos responsables</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info">
                <div class="icon icon-danger">
                  <i class="material-icons">fingerprint</i>
                </div>
                <h4 class="info-title">Informacion Privada</h4>
                <p>Te sentiras seguro con tus datos porque nos preocupamos por ti y tu bolsillo,
                todos tus datos y compras solo las podras ver tú</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <h2 class="title">Productos Disponibles</h2>
        <div class="team">
          <div class="row">
              @foreach($products as $product)
              <div class="col-md-4">
              <div class="team-player">
                <div class="card card-plain">
                  <div class="col-md-9 ml-auto mr-auto">
                    <img src="{{ $product->featured_image_url}}" alt="Thumbnail Image"
                         class="img-raised rounded img-container" height="200px" >
                  </div>
                  <h4 class="card-title">{{$product->name}}
                    <br>
                    <small class="card-description text-muted">{{$product->Category->name}}</small>
                  </h4>
                  <div class="card-body">
                    <p class="card-description">{{$product->description}}</p>
                  </div>
                  <div class="card-footer justify-content-center">
                    <a href="#" class="btn btn-link btn-just-icon"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="btn btn-link btn-just-icon"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="btn btn-link btn-just-icon"><i class="fa fa-facebook-square"></i></a>
                  </div>
                </div>
              </div>
            </div>
              @endforeach

          </div>


            <div class="pagination justify-content-center">
              <!--
              PAGINACIÓN
                <li class="page-item">
                  <a href="?page={{$products->onFirstPage()}}" class="page-link">Primero</a>
                </li>
              -->

             {{$products->links()}}
              <!--
              <li class="page-item">
                <a href="?page={{$products->lastPage()}}" class="page-link">último</a>
              </li>
              -->
            </div>



        </div>
      </div>

      <div class=" section-contacts">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="text-center title">¿Tienes dudas?</h2>
            <h4 class="text-center description">Envia tus dudas y sugerencias para poder mejorar</h4>
            <form class="contact-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="bmd-label-floating">Nombre</label>
                    <input type="email" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="bmd-label-floating">Email</label>
                    <input type="email" class="form-control">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleMessage" class="bmd-label-floating">Tu Mensaje</label>
                <textarea type="email" class="form-control" rows="4" id="exampleMessage"></textarea>
              </div>
              <div class="row">
                <div class="col-md-4 ml-auto mr-auto text-center">
                  <button class="btn btn-primary btn-raised">
                    Enviar :)
                  </button>
                  <br><br>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
@include('includes.footer')
@endsection
