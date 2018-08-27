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
         * esta function crea datos automaticamente puede ser manual o usando factory para
        datos ficticios
        *
        */
        factory(Category::class,5)->create();
        factory(Product::class,100)->create();
        factory(ProductImage::class,200)->create();

    }
}
