<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWexTransactionsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('wex_transactions', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('wex_account_id');
      $table->foreign('wex_account_id')->references('id')->on('wex_accounts')->onDelete('cascade');
      $table->unsignedBigInteger('transaction_id'); // from Wex API
      $table->string('location_state', 2)->nullable();
      $table->string('location_city')->nullable();
      $table->date('transaction_date')->nullable();
      $table->time('transaction_time')->nullable();
      $table->string('card_number')->nullable();
      $table->decimal('amount', 8, 2)->nullable();
      $table->decimal('tax_value', 6, 2)->nullable();
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
    Schema::dropIfExists('wex_transactions');
  }
}
