<!doctype html>
<html lang="es">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport'/>
  <title>
    @yield('title','Bienvenido a TiendaPedidos')
  </title>
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <link rel="stylesheet" href="{{asset('css/material-kit.css')}}" />
  <link rel="stylesheet" href="{{asset('css/demo.css')}}">
</head>

<body class="@yield('body-class')">
  <nav class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="{{ url('/') }}">
          Roy Cabrera
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          @guest
          <li class="nav-item">
            <a class="nav-link" href="{{ route('login') }}">
              Ingresar
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('register') }}">
              Registrar
            </a>
          </li>
          @else
          <li class="nav-item dropdown">

            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false" v-pre>
              {{ Auth::user()->name }}
              <span class="caret"></span>
            </a>

            <div class="dropdown-menu dropdown-menu-right danger" aria-labelledby="navbarDropdown">
                @if(auth()->user()->admin)
                <a class="dropdown-item" href="{{ url('/admin/products') }}">
                    Gestionar Prodcutos
                </a>
                @endif
              <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                Salir
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
              </form>

            </div>
          </li>
          @endguest
        </ul>
      </div>
    </div>
  </nav>

  @yield('content')


 
</body>



<script src="{{ asset('js/app.js') }}"></script>

</html>