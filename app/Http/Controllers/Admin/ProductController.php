<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Product;


class ProductController extends Controller
{
    public function index()
    {
        //$products=Product::paginate(20);
        $products=Product::orderBy('id','asc')->paginate(20);

        return view('admin.products.index')->with(compact('products'));//ver listado
    }
    public function create()
    {
        return view('admin.products.create');//ver formulario registro
    }
    public function store(Request $request)
    {
        //validacion
        $messages=[
            'name.required'=>'Es necesario ingresar un nombre para el producto.',
            'name.min'=>'El producto debe llevar minimo 3 letras.',
            'description.required'=>'La descripción corta del producto es necesaria',
            'description.max'=>'Solo se puede permitir 200 carácteres para la descripción',
            'price.required'=>'El precio del producto es un campo necesario',
            'price.min'=>'El precio solo acepta valores positivos'

        ];

        $rules=[
            'name'=>'required|min:3',
            'description'=>'required|max:200',
            'price'=>'required|numeric|min:0'
            ];

        $this->validate($request,$rules,$messages);
        //**********************************//

    //registrar el nuevo producto en la bd
        //dd($request->all());
        $product = new Product();
        $product->name=$request->input('name');
        $product->description=$request->input('description');
        $product->price=$request->input('price');
        $product->long_description=$request->input('long_description');
        $product->save();
        return redirect('admin/products');
    }
    public function edit($id)
    {
        $product= Product::find($id);
        return view('admin.products.edit')->with(compact('product'));//ver formulario registro
    }
    public function update(Request $request,$id)
    {
//validacion
        $messages=[
            'name.required'=>'Es necesario ingresar un nombre para el producto.',
            'name.min'=>'El producto debe llevar minimo 3 letras.',
            'description.required'=>'La descripción corta del producto es necesaria',
            'description.max'=>'Solo se puede permitir 200 carácteres para la descripción',
            'price.required'=>'El precio del producto es un campo necesario',
            'price.min'=>'El precio solo acepta valores positivos'

        ];

        $rules=[
            'name'=>'required|min:3',
            'description'=>'required|max:200',
            'price'=>'required|numeric|min:0'
        ];
        $this->validate($request,$rules,$messages);

        $product =  Product::find($id);
        $product->name=$request->input('name');
        $product->description=$request->input('description');
        $product->price=$request->input('price');
        $product->long_description=$request->input('long_description');
        $product->save();
        return redirect('admin/products');
    }
    public function destroy(Request $request,$id)
    {
//
//        $product =  Product::find($id);
//        $product->delete();
//        return back();

        if($request->ajax())
        {
            $product =Product::find($id);
            $product->delete();
            $products_total=Product::all()->count();

            return response()->json([
                'total'=>$products_total,
                'mensaje'=>$product->name.' fue eliminado correctamente'

            ]);
        }

    }
}
