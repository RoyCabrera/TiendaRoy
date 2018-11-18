<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function show($id)
    {
        $product=Product::find($id);
        $images=$product->images;
        $imageLeft=collect();
        $imageRight=collect();

        foreach ($images as $key =>$image)
        {
            if($key%2==0)
                $imageLeft->push($image);
            else
                $imageRight->push($image);
        }

        return view('products.show')->with(compact('product','imageLeft','imageRight'));
    }
}
