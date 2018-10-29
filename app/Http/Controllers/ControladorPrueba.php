<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ControladorPrueba extends Controller
{

    //Metodo para la vista de prueba
    public function pruebavista()
    {

        return view('test.prueba');
    }

//**************************************************//
    //metodo para obtener toda la data//
    public function index()
    {
        $producto=Product::orderBy('id','asc')->get();
        return $producto;
    }
//*************************************************//
    public function edit($id)
    {
        $producto=Product::findOrFail($id);
        //formulario
        return $producto;

    }
    public function update(Request $request,$id)
    {

    }
    public function destroy($id)
    {
        $producto=Product::findOrFail($id);
        $producto->delete();
    }
    public function adios()
    {
        return "hola";
    }

}
