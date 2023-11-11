<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Store;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PriceList>
 */
class PriceListFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'price'=> $this->faker->randomFloat($nbMaxDecimals = 2,$min=0.0, $max=100.0),
             'isAvaliable'=> $this->faker->word(),
              'store_id' => function(){
                return Store::factory()->create()->id;
            },
               'product-id' => function(){
                return Product::factory()->create()->id;
            },
        ];
    }
}
