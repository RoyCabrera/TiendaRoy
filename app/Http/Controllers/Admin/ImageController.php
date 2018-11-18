<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Image;
use App\Product;
use App\ProductImage;
use Illuminate\Http\Request;
use File;
use Illuminate\Support\Facades\Auth;




class ImageController extends Controller
{

    public function index($id)
    {
        $product=Product::find($id);
        $images=$product->images()->orderBy('featured','desc')->get();
        return view('admin.products.images.index')->with(compact('product','images'));
    }

    public function store(Request $request,$id)
    {

        $this->validate($request,[
            'photo'=>'required|image'
        ]);

//        //guardar la imagen en nuestro proyecto usando intervention para darle tamaño a la imagen
        $extension=$request->file('photo')->getClientOriginalExtension();
        $filename=uniqid().'.'.$extension;


        Image::make($request->file('photo'))

            ->sharpen(5)
            ->save('images/products/'.$filename);




        //Crear un registro en la tabla product image

        $productImage= new ProductImage();
        $productImage->image=$filename;
        $productImage->product_id=$id;
        $productImage->save();


        return back();


    }

    public function destroy(Request $request,$id)
    {
        $productImage=ProductImage::find($request->input('image_id'));

//       if(substr($productImage->image,0,4)==="http")
//       {
//           $deleted=true;
//       }
//       else
//       {
//           $fullpath=public_path().'/images/products'.$productImage->image;
//           $deleted=File::delete($fullpath);
//       }
        $deleted=true;
        if($deleted)
        {
            $productImage->delete();
        }
        return back();


    }
    public function select($id,$image)
    {
        ProductImage::where('product_id',$id)->update([
           'featured'=>false
        ]);

        $productImage=ProductImage::find($image);
        $productImage->featured=true;
        $productImage->save();
        return back();
    }
}
