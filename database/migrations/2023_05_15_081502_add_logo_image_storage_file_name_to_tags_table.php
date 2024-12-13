<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLogoImageStorageFileNameToTagsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('tags', function (Blueprint $table) {
      $table->string('logo_image_storage_file_name')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('tags', function (Blueprint $table) {
      $table->dropColumn('logo_image_storage_file_name');
    });
  }
}
