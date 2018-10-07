@extends('layouts.app')
@section('title','TiendaRoy | Dashboard')
@section('body-class','tiendaroy-page sidebar-collapse')
@section('content')
    <div class="page-header header-filter " data-parallax="true" style="background-image: url('{{asset('/img/bg2.jpg')}}')">

    </div>
    <div class="main main-raised">
        <div class="container">
            <div class="section text-center">
                <h2 class="title">Dashboard</h2>
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                <ul class="nav nav-pills  nav-pills-icons nav-pills-success" role="tablist">
                    <!--
                        color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
                    -->
                    <li class="nav-item">
                        <a class="nav-link active" href="#dashboard-1" role="tab" data-toggle="tab">
                            <i class="material-icons">dashboard</i>
                            Dashboard
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#tasks-1" role="tab" data-toggle="tab">
                            <i class="material-icons">list</i>
                            Tasks
                        </a>
                    </li>
                </ul>
                <div class="tab-content tab-space">
                    <div class="tab-pane active" id="dashboard-1">
                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                        <br><br>
                        Dramatically visualize customer directed convergence without revolutionary ROI.
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

