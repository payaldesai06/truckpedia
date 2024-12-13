<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateColumnsNullableShippersTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('shippers', function (Blueprint $table) {
      $table->string('primary_contact')->nullable()->change();
      $table->string('phone_number')->nullable()->change();
      $table->dropUnique('shippers_email_unique');
      $table->string('email')->nullable()->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
  }
}
