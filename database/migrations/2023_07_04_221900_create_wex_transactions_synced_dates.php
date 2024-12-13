<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWexTransactionsSyncedDates extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('wex_transactions_synced_dates', function (Blueprint $table) {
      $table->id();
      $table->foreignId('wex_account_id')->constrained('wex_accounts')
        ->cascadeOnDelete();
      $table->string('year', 4);
      $table->string('month', 2);
      $table->string('days');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('wex_transactions_synced_dates');
  }
}
