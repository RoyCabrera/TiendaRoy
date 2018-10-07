<?php


Route::get('/','ControladorPrueba@bienvenido');

Route::get('/adios','ControladorPrueba@adios');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware(['auth','admin'])->prefix('admin')->group(function ()
{

    // como todos llevan admin podemos poner un prefijo
    Route::get('/products','ProductController@index');//listar productos
    Route::get('/products/create','ProductController@create');//crear productos
    Route::post('/products','ProductController@store');//registrar productos
    Route::get('/products/{id}/edit','ProductController@edit');//ir a editar producto
    Route::post('/products/{id}/edit','ProductController@update');//editar producto
    Route::post('/products/{id}/delete','ProductController@destroy');//eliminar producto con metodo post

    Route::get('/products/{id}/images', 'ImageController@index');//listado
    Route::post('products/{id}/images','ImageController@store');//resgistrar
    Route::delete('products/{id}/images','ImageController@destroy');//eliminar con metodo delete
    Route::get('/products/{id}/images/select/{image}', 'ImageController@select');//destacar



    

});


