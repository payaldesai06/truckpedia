<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDispatcherNotesAndDirectionToLoadsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('loads', function (Blueprint $table) {
      $table->string('dispatcher_notes', 255)->nullable();
      $table->tinyInteger('direction')->nullable();
    });

    DB::transaction(function () {
      $directionValues = ['inbound', 'outbound'];
      DB::table('load_drivers')->orderBy('load_id')->chunk(500, function ($loadDrivers) use ($directionValues) {
        foreach ($loadDrivers as $loadDriver) {
          if (empty($loadDriver->direction)) {
            continue;
          }
          if (in_array($loadDriver->direction, $directionValues)) {
            $direction = $loadDriver->direction == 'inbound' ? 1 : 0;
            DB::table('loads')
              ->where('id', $loadDriver->load_id)
              ->update(['direction' => $direction]);
          }}
      });
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('loads', function (Blueprint $table) {
      $table->dropColumn(['dispatcher_notes']);
      $table->dropColumn(['direction']);
    });
  }
}
