<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    public function products()
    {
        //esta funcion nos permite hacer la relacion 1 a muchos con la tabla Productos
        return $this->hasMany(Product::class);
    }
}
