<?php

namespace App\Http\Controllers;

use App\CartDetail;
use Illuminate\Http\Request;

class CartDetailController extends Controller
{
    public function store(Request $request)
    {
        $cartDetail= new CartDetail();
        $cartDetail->cart_id = auth()->user()->cart->id;
        $cartDetail->product_id = $request->product_id;
        $cartDetail->quantity = $request->quantity;
        $cartDetail->save();

        //flash data para la notificación
        $notificacion = 'El producto se ha cargado a tu carrito de compras exitosamente';
        return back()->with(compact('notificacion'));
    }
    public function destroy(Request $request)
    {
        if($request->ajax())
        {
            $cartDetail= CartDetail::find($request->cart_detail_id);
            if ($cartDetail->cart_id == auth()->user()->cart->id)
            {
                $cartDetail->delete();

                $carrito_total=auth()->user()->cart->details->count();

                return response()->json([
                    'totalcarrito' => $carrito_total,
                    'mensaje'=> 'El producto '.$cartDetail->product->name.' se elimino correctamente del 
                                carrito de compras'
                ]);
            }
        }

    }

}
