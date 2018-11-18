<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function update()
    {
        $cart=auth()->user()->cart;
        $cart->status='Pending';
        $cart->save();

        $NotificacionPedido='Tu pedido se realizo correctamente te contactaremos en las proximos minutos';
        return back()->with(compact('NotificacionPedido'));
    }
}
