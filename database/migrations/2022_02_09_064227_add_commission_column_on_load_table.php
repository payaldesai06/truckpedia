<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCommissionColumnOnLoadTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->boolean('dispatcher_paid')->nullable();
      $table->decimal('override_commission_fractional', 5, 4)->nullable();
      $table->decimal('shared_dispatcher_commission_fractional', 5, 4)->nullable();
      $table->decimal('other_commission_amount')->nullable();

      $table->unsignedBigInteger('shared_dispatcher_id')->after('dispatcher_id')->nullable();
      $table->foreign('shared_dispatcher_id')->references('id')->on('users')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropForeign(['shared_dispatcher_id']);
      $table->dropColumn(['dispatcher_paid', 'override_commission_fractional',
        'shared_dispatcher_commission_fractional', 'other_commission_amount',
        'shared_dispatcher_id']);
    });
  }
}
