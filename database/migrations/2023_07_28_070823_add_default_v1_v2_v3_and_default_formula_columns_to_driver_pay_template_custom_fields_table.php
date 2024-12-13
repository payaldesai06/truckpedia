<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDefaultV1V2V3AndDefaultFormulaColumnsToDriverPayTemplateCustomFieldsTable
  extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_pay_template_custom_fields', function (Blueprint $table) {
      $table->decimal('default_v1', 6, 4)->nullable();
      $table->decimal('default_v2', 6, 4)->nullable();
      $table->decimal('default_v3', 6, 4)->nullable();
      $table->unsignedTinyInteger('default_formula')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_pay_template_custom_fields', function (Blueprint $table) {
      $table->dropColumn(['default_v1', 'default_v2', 'default_v3',
        'default_formula']);
    });
  }
}
