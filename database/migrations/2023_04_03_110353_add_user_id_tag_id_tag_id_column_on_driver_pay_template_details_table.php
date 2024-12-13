<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdTagIdTagIdColumnOnDriverPayTemplateDetailsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('driver_pay_template_details', function (Blueprint $table) {
      $table->dropForeign('driver_pay_template_details_template_id_foreign');
      $table->unsignedBigInteger('template_id')->nullable()->change();
      $table->foreign('template_id')->references('id')->on('driver_pay_templates')->nullOnDelete();
      $table->foreignId('user_id')->nullable()->after('template_id')->constrained('users')->nullOnDelete();
      $table->foreignId('tag_id')->nullable()->after('user_id')->constrained('tags')->nullOnDelete();
      $table->foreignId('truck_id')->nullable()->after('tag_id')->constrained('trucks')->nullOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('driver_pay_template_details', function (Blueprint $table) {
      $table->dropColumn(['user_id', 'tag_id', 'truck_id']);
    });
  }
}
