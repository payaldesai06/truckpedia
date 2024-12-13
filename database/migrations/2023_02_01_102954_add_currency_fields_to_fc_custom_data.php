<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCurrencyFieldsToFcCustomData extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_data', function (Blueprint $table) {
      $table->decimal('decimal_value', 19, 4)->after('text_value')->nullable();
      $table->double('double_value')->after('text_value')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_data', function (Blueprint $table) {
      $table->dropColumn(['decimal_value', 'double_value']);
    });
  }
}
