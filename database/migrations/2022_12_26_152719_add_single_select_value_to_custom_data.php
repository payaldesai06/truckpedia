<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSingleSelectValueToCustomData extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_data', function (Blueprint $table) {
      $table->time('time_value')->after('text_value')->nullable();
      $table->date('date_value')->after('text_value')->nullable();
      $table->foreignId('single_select_value')->after('text_value')->nullable()->constrained('fc_custom_fields_select_options')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_data', function (Blueprint $table) {
      $table->dropColumn(['single_select_value', 'date_value', 'time_value']);
    });
  }
}
