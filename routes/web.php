<?php


Route::get('/','ControladorPrueba@bienvenido');

Route::get('/adios','ControladorPrueba@adios');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
