<?php

use App\Models\AdminDetail;
use App\Models\DispacherDetail;
use App\Models\DriverDetail;
use App\Models\TagOperatorDetail;
use App\Models\WarehouseOperatorDetail;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class MigrateNamesSeeder extends Seeder {

  public function run() {
    $admins = AdminDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->cursor();

    $this->migrateNames($admins);

    $dispatchers = DispacherDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->cursor();

    $this->migrateNames($dispatchers);

    $drivers = DriverDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'name'])
      ->cursor();

    $this->migrateNames($drivers);

    $tagOperators = TagOperatorDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->cursor();

    $this->migrateNames($tagOperators);

    $warehouseOperators = WarehouseOperatorDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->cursor();

    $this->migrateNames($warehouseOperators);
  }

  public function migrateNames($users) {
    DB::transaction(function () use ($users) {
      try {
        foreach ($users as $user) {
          $user->user->update([
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
          ]);
        }
      } catch (\Exception $e) {
        Log::error($e->getMessage());
        throw new Exception($e->getMessage());
      }
    });
  }
}
