<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFcCustomRecordIdColumnOnInvoiceItemsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('invoice_items', function (Blueprint $table) {
      $table->foreignId('fc_custom_record_id')->nullable()->after('amount')
        ->constrained('fc_custom_records')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('invoice_items', function (Blueprint $table) {
      $table->dropColumn('fc_custom_record_id');
    });
  }
}
