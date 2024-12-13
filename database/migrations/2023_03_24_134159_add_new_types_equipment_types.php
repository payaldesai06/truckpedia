<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddNewTypesEquipmentTypes extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    DB::statement("ALTER TABLE loads MODIFY COLUMN equipment_type 
    ENUM('53_dry_van','53_reefer','flatbed','power_only','48_dry_van','48_reefer','22_van','cargo_van','hot_shot','box_truck',
    'load_out','step_deck','straight_van','tanker','curtain_van','vented_van', '20_dry_container', '20_reefer_container', '40_dry_container','40_reefer_container', '45_dry_container','45_reefer_container')");
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    //
  }
}
