<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('invoices', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')->cascadeOnDelete();
      $table->foreignId('customer_id')->nullable()->constrained('customers')->nullOnDelete();
      $table->tinyInteger('status')->comment('1 for draft, 2 for requested, 3 for paid')->nullable();
      $table->string('invoice_number')->nullable();
      $table->date('issue_date')->nullable();
      $table->date('due_date')->nullable();
      $table->decimal('balance_due', 8, 2)->nullable();
      $table->string('storage_file_name')->nullable();
      $table->string('notes', 4000)->nullable();
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
    Schema::dropIfExists('invoices');
  }
}
