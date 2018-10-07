@extends('layouts.app')
@section('title','Ingresar')
@section('body-class','signup-page')
@section('content')
    <div class="page-header header-filter" style="background-image: url('{{asset('img/bg7.jpg')}}'); 
  background-size: cover; background-position: top center;">

        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 ml-auto mr-auto">
                <div class="card card-login">
                <form class="form" method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                            @csrf
                    <div class="card-header card-header-info text-center">
                        <h4 class="card-title">Tienda de Pedidos</h4>
                        <div class="social-line">
                            <a href="#" class="btn btn-just-icon btn-link">
                                <i class="fa fa-facebook-square"></i>
                            </a>
                            <a href="#" class="btn btn-just-icon btn-link">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="#" class="btn btn-just-icon btn-link">
                                <i class="fa fa-google-plus"></i>
                            </a>
                        </div>
                    </div>
                    <p class="description text-center">Mi Primera Tienda con Laravel</p>
                    <div class="card-body">
                        <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                            <i class="material-icons">mail</i>
                            </span>
                        </div>
                        <input id="email" type="email"
                                class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}"
                                name="email" value="{{ old('email') }}" required autofocus
                                placeholder="Correo Electronico">
                        </div>
                        <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                            <i class="material-icons">lock_outline</i>
                            </span>
                        </div>
                        <input id="password" type="password"
                                class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                name="password" required placeholder="contraseña">
                                @if ($errors->has('password'))
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                        </div>
                        <div class="form-check ">
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember"
                                               id="remember" {{ old('remember') ? 'checked' : '' }}>
                                        Recordar Sesión
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </label>
                        </div>
                    </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-simple btn-info btn-md btn-round">
                                {{ __('Entrar') }}
                            </button>
                        </div>
                        <div class="text-right">
                            <a class="btn btn-info btn-link btn-round" href="{{ route('password.request') }}">
                                {{ __('¿Olvidaste tu contraseña?') }}
                            </a>
                        </div> 
                        @if ($errors->has('email'))
                        <div class="alert alert-danger rounded">
                            
                                <div class="alert-icon">
                                    <i class="material-icons">error_outline</i>
                                </div>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true"><i class="material-icons">clear</i></span>
                                </button>
                                <strong>{{ $errors->first('email') }}</strong>
                            
                        </div>
                        @endif
                    </form>
                </div>
                </div>
            </div>
        </div>
        @include('includes.footer')
    </div>

@endsection
