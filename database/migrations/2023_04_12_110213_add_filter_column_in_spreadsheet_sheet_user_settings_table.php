<?php

use App\Models\Spreadsheet;
use App\Models\SpreadsheetSheetUserSettings;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFilterColumnInSpreadsheetSheetUserSettingsTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::table('spreadsheet_sheet_user_settings', function (Blueprint $table) {
      $table->json('filter')->after('color_schema')->nullable();
    });

    // copy the sheet’s filter to each shared user’s filter column.
    Spreadsheet::with([
      'sheets:id,filter,spreadsheet_id',
      'sharedUsers:id,spreadsheet_id,user_id'
    ])->get()->map(function ($spreadsheet) {
      foreach ($spreadsheet->sheets as $sheet) {
        $filter = $sheet->filter ?? null;
        if (empty($filter)) {
          continue;
        }
        foreach ($spreadsheet->sharedUsers as $sharedUser) {
          SpreadsheetSheetUserSettings::updateOrCreate([
            'sheet_id' => $sheet->id ?? null,
            'user_id' => $sharedUser->user_id ?? null
          ], [
            'filter' => $filter
          ]);
        }
        SpreadsheetSheetUserSettings::updateOrCreate([
          'sheet_id' => $sheet->id ?? null,
          'user_id' => $spreadsheet->owner_id ?? null
        ], [
          'filter' => $filter
        ]);
      }
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::table('spreadsheet_sheet_user_settings', function (Blueprint $table) {
      $table->dropColumn('filter');
    });
  }
}
