<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCommissionColumnsInDispatcherDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('dispacher_details', function (Blueprint $table) {
      $table->decimal('commission_fractional', 5, 4)->after('last_name')->default(0);
      $table->enum('commission_on', ['hauling_fee', 'hauling_fee_with_accessorial_fee', 'total_income'])->after('commission_fractional')->default('total_income');
    });

    DB::transaction(function () {
      DB::table('dispacher_details')->update(['commission_fractional' => 0,
        'commission_on' => 'total_income']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('dispacher_details', function (Blueprint $table) {
      $table->dropColumn(['commission_fractional', 'commission_on']);
    });
  }
}
