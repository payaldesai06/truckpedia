<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsV2SageDesktopSyncResultsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('trips_v2_sage_desktop_sync_results', function (Blueprint $table) {
      $table->id();
      $table->foreignId('trip_id')->constrained('trips_v2')->cascadeOnDelete();
      $table->string('sage_invoice_number')->nullable();
      $table->softDeletes();
      $table->timestamp('created_at')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('trips_v2_sage_desktop_sync_results');
  }
}
