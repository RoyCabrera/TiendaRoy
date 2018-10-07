@extends('layouts.app')
@section('title','Registrarse')
@section('body-class','signup-page')
@section('content')
<div class="page-header header-filter"  style="background-image: url('{{asset('img/bg3.jpg')}}'); 
background-size: cover; background-position: top center;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="card card-signup">
                        <h2 class="card-title text-center">Formulario de Registro</h2>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5 ml-auto">
                                    
                                    <div class="info info-horizontal">
                                        <div class="icon icon-info">
                                            <i class="material-icons">shop</i>
                                        </div>
                                        <div class="description">
                                            <h4 class="info-title">Fully Coded in HTML5</h4>
                                            <p class="description">
                                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="info info-horizontal">
                                        <div class="icon icon-info">
                                            <i class="material-icons">group</i>
                                        </div>
                                        <div class="description">
                                            <h4 class="info-title">Built Audience</h4>
                                            <p class="description">
                                                There is also a Fully Customizable CMS Admin Dashboard for this product.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 mr-auto">
                                    
                                    <form method="POST" action="{{ route('register') }}" aria-label="{{ __('Register') }}">
                                    @csrf
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">face</i>
                                                    </span>
                                                </div>
                                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" 
                                                name="name" value="{{ old('name') }}" required autofocus placeholder="Nombre">

                                                    @if ($errors->has('name'))
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $errors->first('name') }}</strong>
                                                        </span>
                                                    @endif
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">mail</i>
                                                    </span>
                                                </div>
                                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" 
                                                name="email" value="{{ old('email') }}" required placeholder="Email">

                                                @if ($errors->has('email'))
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $errors->first('email') }}</strong>
                                                    </span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">lock_outline</i>
                                                    </span>
                                                </div>
                                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" 
                                                name="password" required placeholder="Contraseña">

                                                @if ($errors->has('password'))
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $errors->first('password') }}</strong>
                                                    </span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="material-icons">lock_outline</i>
                                                    </span>
                                                </div>
                                                <input id="password-confirm" type="password" class="form-control" 
                                                name="password_confirmation" required placeholder="Confirmar Contraseña">

                                            
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-info btn-round">Registrarse</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @include('includes.footer')
</div>

@endsection
