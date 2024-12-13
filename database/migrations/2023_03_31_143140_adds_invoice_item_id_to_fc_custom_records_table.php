<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddsInvoiceItemIdToFcCustomRecordsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('fc_custom_records', function (Blueprint $table) {
      $table->foreignId('invoice_item_id')->nullable()->after('submenu_id')
        ->constrained('invoice_items')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('fc_custom_records', function (Blueprint $table) {
      $table->dropColumn('invoice_item_id');
    });
  }
}
