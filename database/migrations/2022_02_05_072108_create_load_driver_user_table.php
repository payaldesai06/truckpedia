<?php

use App\Models\LoadDriver;
use App\Models\LoadDriverUser;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateLoadDriverUserTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('load_driver_user', function (Blueprint $table) {
      $table->foreignId('load_driver_id')->references('id')->on('load_drivers')->onDelete('cascade');
      $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');

      $table->primary(['load_driver_id', 'user_id']);
      $table->softDeletes();
      $table->timestamps();
    });

    DB::transaction(function () {
      $rows = LoadDriver::select(['id', 'driver_ids'])->whereNotNull('driver_ids')->get();
      foreach ($rows as $row) {
        if (empty($row->driver_ids)) {
          continue;
        }
        $userIds = explode(',', $row->driver_ids);
        foreach ($userIds as $userId) {
          LoadDriverUser::create([
            'load_driver_id' => $row->id,
            'user_id' => (int) $userId,
          ]);
        }
      }
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('load_driver_user');
  }
}
