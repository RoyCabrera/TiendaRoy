<?php



Route::get('/', function () {
    return view('welcome');
});

Route::get('/adios','ControladorPrueba@adios');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
