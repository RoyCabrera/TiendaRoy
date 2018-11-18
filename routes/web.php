<?php
//  ruta y controlador para retornar la vista welcome con los productos de la tienda
Route::get('/','welcomeController@welcome');
// ruta y autentificación
Auth::routes();
//  ruta y controlador para la vista home
Route::get('/home', 'HomeController@index')->name('home');
//  ruta y controlador para mostrar productos de la tienda al cliente
Route::get('/products/{id}','ProductController@show');
//  ruta para el carrito de compras
Route::post('/cart','CartDetailController@store');
Route::delete('/cart','CartDetailController@destroy');
//Relizar pedido

Route::post('/order','CartController@update');
//  rutas y controladores con prefijo admin para gestionar los productos
Route::middleware(['auth','admin'])->prefix('admin')->namespace('Admin')->group(function ()
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
    Route::delete('products/{id}/images','ImageController@destroy')->name('destroyProduct');//eliminar con metodo delete
    Route::get('/products/{id}/images/select/{image}', 'ImageController@select');//destacar


});

//  rutas y controladores de practica
Route::get('/adios','ControladorPrueba@adios');
Route::get('/test','ControladorPrueba@pruebavista');
Route::resource('/test/data','ControladorPrueba');
Route::get('/consultasunat','RucController@index')->name('consultar.sunat');
Route::get('/consultaruc','RucController@consultar')->name('consultar.ruc');




