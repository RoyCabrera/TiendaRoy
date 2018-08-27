<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
        public function category()
        {
            //esta funcion nos permite hacer la relacion muchos a 1 con la tabla Category
            return $this->belongsTo(Category::class);
        }
        public function images()
        {
            return $this->hasMany(ProductImage::class);
        }
}
