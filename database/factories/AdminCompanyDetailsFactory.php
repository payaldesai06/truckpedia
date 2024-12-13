<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\AdminCompanyDetail;
use Faker\Generator as Faker;

$factory->define(AdminCompanyDetail::class, function (Faker $faker) {
  return [
    'user_id' => factory('App\Models\User'),
    'email' =>  $faker->unique()->safeEmail,
    'business_name' =>  $faker->unique()->sentence(),
    'usdot_number' => $faker->sentence(1),
    'address' => $faker->sentence(10),
    'city' => $faker->sentence(10),
    'state' => $faker->sentence(5),
    'zipcode' => $faker->sentence(6),
    'phone_number' => $faker->sentence(10),
    'load_unique_id_started_from' => $faker->randomNumber(),
    'timezone' => 'America/Los_Angeles',
    'business_url' => $faker->unique()->sentence(),
  ];
});
