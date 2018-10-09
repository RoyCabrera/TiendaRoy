<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ControladorPrueba extends Controller
{

    public function bienvenido()
    {
        $products=Product::paginate(15);

        return view('welcome')->with(compact('products'));
    }

    public function adios()
    {
        return "hola que tal como te va adios";
    }
    public function prueba()
    {
        return view('test.prueba');
    }

}
