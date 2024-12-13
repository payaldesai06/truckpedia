<?php

use App\Models\AdminDetail;
use App\Models\DispacherDetail;
use App\Models\DriverDetail;
use App\Models\TagOperatorDetail;
use App\Models\WarehouseOperatorDetail;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AddFirstAndLastNameToUsersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('users', function (Blueprint $table) {
      $table->string('first_name')->after('role')->nullable();
      $table->string('last_name')->after('first_name')->nullable();
    });

    $this->processName();
  }

  public function processName() {
    $admins = AdminDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->get();

    $this->migrateNames($admins);

    $dispatchers = DispacherDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->get();

    $this->migrateNames($dispatchers);

    $drivers = DriverDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'name'])
      ->get();

    $this->migrateNames($drivers);

    $tagOperators = TagOperatorDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->get();

    $this->migrateNames($tagOperators);

    $warehouseOperators = WarehouseOperatorDetail::with(['user:id,first_name,last_name'])
      ->whereHas('user', function ($query) {
        $query->whereNull('first_name');
      })
      ->select(['user_id', 'first_name', 'last_name'])
      ->get();

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

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('users', function (Blueprint $table) {
      $table->dropColumn(['first_name', 'last_name']);
    });
  }
}
