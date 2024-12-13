<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicePaymentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('invoice_payments', function (Blueprint $table) {
      $table->id();
      $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
      $table->tinyInteger('payment_service_provider')->nullable()
        ->comment('1. Authorize.net');
      $table->decimal('amount_paid', 8, 2)->nullable();
      $table->string('reference_id')->nullable();
      $table->string('transaction_id')->nullable();
      $table->string('card_issuing_bank')->nullable();
      $table->string('card_last_4')->nullable();
      $table->tinyInteger('status')->nullable()->comment('null: processing, 1 - success, 2 - failed');
      $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete()
        ->comment('If an Ezpapel user directly inputs a card and charge it.');
      $table->string('error_messages')->nullable();
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
    Schema::dropIfExists('invoice_payments');
  }
}
