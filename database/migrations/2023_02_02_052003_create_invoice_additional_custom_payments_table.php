<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceAdditionalCustomPaymentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('invoice_additional_custom_payments', function (Blueprint $table) {
      $table->id();
      $table->foreignId('invoice_id')->constrained('invoices')->cascadeOnDelete();
      $table->foreignId('field_id')->constrained('invoice_custom_payment_fields')->cascadeOnDelete();
      $table->decimal('payment', 8, 2)->nullable();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('invoice_additional_custom_payments');
  }
}
