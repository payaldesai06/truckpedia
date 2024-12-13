<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\WarehouseOperatorDetail;

class CreateWarehouseOperatorDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('warehouse_operator_details', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('user_id');
      $table->foreign('user_id')->references('id')->on('users');
      $table->string('first_name');
      $table->string('last_name');
      $table->string('profile_image')->nullable();
      $table->softDeletes();
      $table->timestamps();
    });

    DB::beginTransaction();
    User::where('role', config('constant.roles.warehouse_operator'))->chunk(500, function ($users) {
      foreach ($users as $user) {
        $detail = new WarehouseOperatorDetail();
        $detail->user_id = $user->id;
        $detail->first_name = 'Warehouse';
        $detail->last_name = 'Operator';
        $detail->profile_image = NULL;
        $detail->save();
      }
    });
    DB::commit();
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('warehouse_operator_details');
  }
}
