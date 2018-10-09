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
                    <div class="row">
                        <div id="main" class="container">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h1>VUEjs - AJAX axios</h1>
                                    <ul class="list-group">
                                        <li v-for="item in lists" class="list-group-item">
                                            @{{ item.name }}
                                        </li>
                                    </ul>

                                </div>
                                <div class="col-sm-6 bg-light">
                                    <h1>JSON</h1>
                                    <pre>
                                        @{{ $data}}
				                    </pre>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

@include('includes.footer')
@endsection