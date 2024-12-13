<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQbdResyncInvoiceJobsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('qbd_resync_invoice_jobs', function (Blueprint $table) {
      $table->id();

      $table->unsignedBigInteger('qbd_connection_id');
      $table->foreign('qbd_connection_id')->references('id')
        ->on('qbd_connections')->onDelete('cascade');

      $table->unsignedBigInteger('load_id')->nullable();
      $table->foreign('load_id')->references('id')
        ->on('loads')->onDelete('cascade');

      $table->unsignedBigInteger('mass_invoice_number')->nullable();
      $table->string('mass_invoice_load_ids', 4000)->nullable();
      $table->string('result', 255)->nullable();
      $table->timestamp('last_tried_at')->nullable();
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
    Schema::dropIfExists('qbd_resync_invoice_jobs');
  }
}
