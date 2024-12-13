<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdAuthIdToQuickbooksSyncedLoadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('quickbooks_synced_loads', function (Blueprint $table) {
            $table->dropForeign(['load_id']);
            $table->dropPrimary(['load_id']);
            $table->foreign('load_id')->references('id')->on('loads')->onDelete('cascade');
        });

        Schema::table('quickbooks_synced_loads', function (Blueprint $table) {
            $table->id()->first();
            $table->unsignedBigInteger('quickbooks_auth_id')->after('id');
        });

        $rows = DB::table('quickbooks_synced_loads')
            ->join('quickbooks_auth', 'quickbooks_synced_loads.company_id', '=', 'quickbooks_auth.company_id')
            ->select('quickbooks_synced_loads.id', 'quickbooks_auth.id as auth_id')
            ->get();
        foreach ($rows as $row) {
            DB::table('quickbooks_synced_loads')
                ->where('id', $row->id)
                ->update(['quickbooks_auth_id' => $row->auth_id]);
        }

        Schema::table('quickbooks_synced_loads', function (Blueprint $table) {
            $table->foreign('quickbooks_auth_id')->references('id')->on('quickbooks_auth')->onDelete('cascade');
            $table->dropForeign(['company_id']);
            $table->dropColumn(['company_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('quickbooks_synced_loads', function (Blueprint $table) {
            $table->dropForeign(['quickbooks_auth_id']);
            $table->dropColumn(['id', 'quickbooks_auth_id']);
        });

        Schema::table('quickbooks_synced_loads', function (Blueprint $table) {
            $table->primary('load_id');
        });
    }
}
