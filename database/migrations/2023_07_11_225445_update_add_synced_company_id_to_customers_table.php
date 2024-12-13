<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateAddSyncedCompanyIdToCustomersTable extends Migration {
  public function up() {
    Schema::table('customers', function (Blueprint $table) {
      $table->foreignId('synced_company_id')->nullable()->after('company_id')
        ->constrained('admin_company_details')->nullOnDelete();
    });
  }

  public function down() {
    Schema::table('customers', function (Blueprint $table) {
      $table->dropForeign('customers_synced_company_id_foreign');
      $table->dropColumn('synced_company_id');
    });
  }
}
