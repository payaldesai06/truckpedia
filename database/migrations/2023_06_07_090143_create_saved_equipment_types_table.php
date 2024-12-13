<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSavedEquipmentTypesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('saved_equipment_types', function (Blueprint $table) {
      $table->id();
      $table->foreignId('company_id')->constrained('admin_company_details')->cascadeOnDelete();
      $table->string('equipment_type')->nullable();
      $table->string('description')->nullable();
      $table->decimal('weight', 12,4)->nullable();
      $table->tinyInteger('weight_unit')->nullable()->comment('1-> lbs, 2-> tons, 3-> kg');
      $table->decimal('qty', 12, 4)->nullable();
      $table->tinyInteger('qty_unit')->nullable()
        ->comment('1-> pallets, 2-> crates, 3-> hours, 4-> days, 5-> miles, 6-> yards, 7-> feet');
      $table->string('length')->nullable();
      $table->string('width')->nullable();
      $table->string('height')->nullable();
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
    Schema::dropIfExists('saved_equipment_types');
  }
}
