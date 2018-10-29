<?php
//  ruta y controlador para retornar la vista welcome con los productos de la tienda
Route::get('/','welcomeController@welcome');

//  rutas y controladores de practica
Route::get('/adios','ControladorPrueba@adios');
Route::get('/test','ControladorPrueba@pruebavista');
Route::resource('/test/data','ControladorPrueba');

// ruta y autentificación
Auth::routes();

//  ruta y controlador para la vista home
Route::get('/home', 'HomeController@index')->name('home');

//  ruta y controlador para mostrar productos de la tienda al cliente
Route::get('/products/{id}','ProductController@show');

//  rutas y controladores con prefijo admin para gestionar los productos
Route::middleware(['auth','admin'])->prefix('admin')->group(function ()
{

    // como todos llevan admin podemos poner un prefijo
    Route::get('/products','Admin\ProductController@index');//listar productos
    Route::get('/products/create','Admin\ProductController@create');//crear productos
    Route::post('/products','Admin\ProductController@store');//registrar productos
    Route::get('/products/{id}/edit','Admin\ProductController@edit');//ir a editar producto
    Route::post('/products/{id}/edit','Admin\ProductController@update');//editar producto
    Route::post('/products/{id}/delete','Admin\ProductController@destroy');//eliminar producto con metodo post

    Route::get('/products/{id}/images', 'Admin\ImageController@index');//listado
    Route::post('products/{id}/images','Admin\ImageController@store');//resgistrar
    Route::delete('products/{id}/images','Admin\ImageController@destroy')->name('destroyProduct');//eliminar con metodo delete
    Route::get('/products/{id}/images/select/{image}', 'Admin\ImageController@select');//destacar


});




