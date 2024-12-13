<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStripePaymentMethodIdToAdminCompanyDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('admin_company_details', function (Blueprint $table) {
            $table->string('stripe_payment_method_id')->nullable()->comment('when company add card details.');
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
            $table->dropColumn(['stripe_payment_method_id']);
        });
    }
}
