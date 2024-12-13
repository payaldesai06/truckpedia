<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSubscriptionStatusToAdminCompanyDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admin_company_details', function (Blueprint $table) {
            $table->date('subscription_from_date')->nullable()->comment('company subscription from date.');
            $table->date('subscription_to_date')->nullable()->comment('company subscription to date.');
            $table->string('subscription_status')->nullable()->comment('1.in_active,2.active,3.suspended,4.canceled');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('admin_company_details', function (Blueprint $table) {
            $table->dropColumn(['subscription_from_date']);
            $table->dropColumn(['subscription_to_date']);
            $table->dropColumn(['subscription_status']);
        });
    }
}
