<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStripeCustomerIdToAdminCompanyDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admin_company_details', function (Blueprint $table) {
            $table->string('stripe_customer_id')->nullable()->comment('company register & create stripe customer');
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
            $table->dropColumn(['stripe_customer_id']);
        });
    }
}
