<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class WelcomeController extends Controller
{
    public function welcome()
    {
        $products=Product::paginate(15);

        return view('welcome')->with(compact('products'));
    }
}
