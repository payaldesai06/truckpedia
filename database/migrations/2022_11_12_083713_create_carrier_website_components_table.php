<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarrierWebsiteComponentsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('carrier_website_components', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('company_id');
      $table->foreign('company_id')->references('id')->on('admin_company_details')->onDelete('cascade');
      $table->tinyInteger('type')->comment(' 1 for header, 2 for footer, 3 for tabs');
      $table->string('name')->nullable();
      $table->string('path')->nullable();
      $table->string('file_name')->nullable();
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
    Schema::dropIfExists('carrier_website_components');
  }
}
