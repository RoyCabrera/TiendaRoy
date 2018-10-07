<?php

use Illuminate\Database\Seeder;
use App\Product;
use App\Category;
use App\ProductImage;

class ProductsTableSeeder extends Seeder
{

    public function run()
    {
        /*
        esta function crea datos automaticamente puede ser manual o usando factory para
        datos ficticios

        create crea y guarda en la BD make solo crea y NO guarda


        factory(Category::class,5)->create();
        factory(Product::class,100)->create();
        factory(ProductImage::class,200)->create();
        */

        $categories=factory(Category::class,5)->create();

        //creando 20 productos por categoria
        $categories->each(function ($category){
           $products=factory(Product::class,20)->make();
           $category->products()->saveMany($products);

        //creando 5 imagenes por producto
           $products->each(function ($p){
              $images=factory(ProductImage::class,5)->make();
              $p->images()->saveMany($images);
           });
        });

    }
}
