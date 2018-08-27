<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //esta function llama los seeders creados para generar datos normales o ficiticios

        $this->call(UsersTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
    }
}
