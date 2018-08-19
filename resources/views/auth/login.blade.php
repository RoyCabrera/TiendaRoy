@extends('layouts.app')

@section('body-class','signup-page')

@section('content')
    <div class="header header-filter" style="background-image: url('{{asset('img/city.jpg')}}');
            background-size: cover; background-position: top center;">

        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                    <div class="card card-signup">
                        <form class="form" method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                            @csrf
                            <div class="header header-info text-center">
                                <h4>Inicio de sesión</h4>
                                <div class="social-line">
                                    <a href="#" class="btn btn-simple btn-just-icon">
                                        <i class="fa fa-facebook-square"></i>
                                    </a>
                                    <a href="#" class="btn btn-simple btn-just-icon">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" class="btn btn-simple btn-just-icon">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </div>
                            </div>
                            <p class="text-divider">Ingresa tus datos</p>
                            <div class="content">

                                <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">email</i>
                                        </span>
                                    <input id="email" type="email"
                                           class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                           name="email" value="{{ old('email') }}" required autofocus
                                           placeholder="Correo Electronico">
                                </div>


                                <div class="input-group">
                                        <span class="input-group-addon">
                                            <i class="material-icons">lock_outline</i>
                                        </span>
                                    <input id="password" type="password"
                                           class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                           name="password" required placeholder="Password...">
                                </div>

                                <div class="checkbox">
                                    <label>

                                        <input class="form-check-input" type="checkbox" name="remember"
                                               id="remember" {{ old('remember') ? 'checked' : '' }}>
                                        Recordar Sesión
                                    </label>
                                </div>
                            </div>
                            <div class="footer text-center">
                                <button type="submit" class="btn btn-simple btn-info btn-lg">
                                    {{ __('Iniciar') }}
                                </button>

                            </div>
                            <div class="pull-right">
                                <a class="btn btn-simple" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="container">
                <nav class="pull-left">
                    <ul>
                        <li>
                            <a href="#">
                                Roy Cabrera Ayala
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Acerca de
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Licenciado
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="copyright pull-right">
                    &copy; 2016, made with <i class="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com" target="_blank">Creative Tim</a>
                </div>
            </div>
        </footer>

    </div>
@endsection
