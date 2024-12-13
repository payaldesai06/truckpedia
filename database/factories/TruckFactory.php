<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Truck;
use Faker\Generator as Faker;

$factory->define(Truck::class, function (Faker $faker) {
    return [
        'user_id' => factory('App\Models\User'),
        'number' => $faker->randomNumber(),
        'type' => $faker->sentence(1),
        'licence_plate' => strtoupper($faker->lexify('???')) . '-' . $faker->randomNumber('4'),
        'licence_plate_expiry' => \Carbon\Carbon::now()->addYear(rand(0, 5))->addMonth(rand(0, 11))->addDay(rand(0, 28))->toDateString(),
        'inspection_expiry' => \Carbon\Carbon::now()->addYear(rand(0, 5))->addMonth(rand(0, 11))->addDay(rand(0, 28))->toDateString(),
        'status' => $faker->randomElement(['active', 'inactive']),
        'ownership' => $faker->randomElement(['company_truck', 'owner_operator', 'leased']),
    ];
});
