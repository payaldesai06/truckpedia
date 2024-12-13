<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoadMultiPurposeStopsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('load_multi_purpose_stops', function (Blueprint $table) {
      $table->id();
      $table->foreignId('load_id')->constrained('loads')->cascadeOnDelete();
      $table->tinyInteger('type')->nullable()->comment('1: terminal');
      $table->tinyInteger('order')->nullable();
      $table->string('name', 255)->nullable();
      $table->string('address', 255)->nullable();
      $table->string('city', 255)->nullable();
      $table->string('state', 255)->nullable();
      $table->string('zip_code', 255)->nullable();
      $table->decimal('latitude', 8, 6)->nullable();
      $table->decimal('longitude', 9, 6)->nullable();
      $table->date('date')->nullable();
      $table->date('end_date')->nullable();
      $table->time('time')->nullable();
      $table->time('end_time')->nullable();
      $table->string('contact_person', 255)->nullable();
      $table->string('contact_number', 255)->nullable();
      $table->string('notes', 2000)->nullable();
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
    Schema::dropIfExists('load_multi_purpose_stops');
  }
}
