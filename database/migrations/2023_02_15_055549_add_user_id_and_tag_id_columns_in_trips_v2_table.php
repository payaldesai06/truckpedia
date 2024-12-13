<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdAndTagIdColumnsInTripsV2Table extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('trips_v2', function (Blueprint $table) {
      // This does not work at all.
      // 2022_05_15_184803_support_mass_invoice_for_qbd_invoices_table.php
      // $table->foreignId('user_id')->change()->nullable()->constrained('users')->nullOnDelete();
      $table->dropForeign('trips_v2_user_id_foreign'); 
      $table->unsignedBigInteger('user_id')->nullable()->change();
      $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
      $table->foreignId('tag_id')->after('user_id')->nullable()->constrained('tags')->nullOnDelete();
      $table->foreignId('truck_id')->after('tag_id')->nullable()->constrained('trucks')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('trips_v2', function (Blueprint $table) {
      $table->dropColumn(['tag_id', 'truck_id']);
    });
  }
}
