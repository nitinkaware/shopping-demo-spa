<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(ProductStatisticsTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(SubCategoriesTableSeeder::class);
        $this->call(TaxesTableSeeder::class);
        $this->call(VariantsTableSeeder::class);
    }
}
