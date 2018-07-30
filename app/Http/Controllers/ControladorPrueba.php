<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ControladorPrueba extends Controller
{

    public function bienvenido()
    {
        return view('welcome');
    }

    public function adios()
    {
        return view('adios');
    }

}
