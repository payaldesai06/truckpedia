<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWexTransactionLineItemsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('wex_transaction_line_items', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('wex_transaction_id');
      $table->foreign('wex_transaction_id')->references('id')->on('wex_transactions')->onDelete('cascade');
      $table->unsignedTinyInteger('line_item_number')->nullable();
      $table->decimal('amount', 8, 2)->nullable();
      $table->decimal('quantity', 6, 2)->nullable();
      $table->decimal('ppu', 6, 4)->nullable();
      $table->decimal('federal_tax', 6, 2)->nullable();
      $table->decimal('state_tax', 6, 2)->nullable();
      $table->tinyInteger('use_type')->nullable()->comment('0 for Non-fuel, 1 for Fuel, 2 Reefer products');
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
    Schema::dropIfExists('wex_transaction_line_items');
  }
}
