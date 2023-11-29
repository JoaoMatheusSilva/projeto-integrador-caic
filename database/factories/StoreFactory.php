<?php

namespace Database\Factories;

use App\Models\ZipCode;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Store>
 */
class StoreFactory extends Factory
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
            'name' => $this->faker->word(),
            'contact' => $this->faker->word(),
            'email' => $this->faker->unique()->email(),
            'phone' => $this->faker->phoneNumber(),
            'cnpj' => $this->faker->unique()->numerify('########'),
            'number' => $this->faker->numberBetween($int1 = 100, $int2 = 1000),
            'complement' => $this->faker->word(),
            'zip_code_id'  => function () {
                return ZipCode::factory()->create()->id;
            },
        ];
    }
}
