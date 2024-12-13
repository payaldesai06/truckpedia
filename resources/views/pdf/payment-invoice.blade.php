<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Invoice</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/ico/favicon.ico">
    <link href="assets/css/font.css" rel="stylesheet">

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap-extended.css">

    <link rel="stylesheet" type="text/css" href="assets/css/invoice.css">
    <!-- END: Page CSS-->
</head>

<body>
    <div class="content-wrapper">
        <section class="invoice-page" style="padding: 2.2rem;">
            <div id="invoice-template" class="card-body">
                <!-- Invoice Company Details -->
                <!-- Invoice Company Details -->
                <div id="invoice-company-details" class="">
                    <div class="block-1" style="padding-top: 8.1rem;">
                        <h4 style="font-size: 1.32rem;">Recipient</h4>
                        <div class="invoice-details mt-2">
                            <h5 style="font-size: 1.2rem" class="mb-1">{{ $adminCompanyDetail->business_name }}</h5>
                            <div class="address mt-2">
                                <p>{{ $adminCompanyDetail->address }}</p>
                                <p>{{ $adminCompanyDetail->city }}</p>
                                <p>{{ $adminCompanyDetail->state }}</p>
                                <p>{{ $adminCompanyDetail->zipcode }}</p>
                            </div>
                        </div>
                        <div class="company-contact">
                            <p>
                                <img src="assets/images/ico/mail.png" style="margin-top:7px;">
                                {{ $user->email }}
                            </p>
                            <p>
                                <img src="assets/images/ico/phone.png" style="margin-top:7px;">
                                {{ $adminCompanyDetail->phone_number }}
                            </p>
                        </div>
                    </div>
                    <div class="block-2">
                        <h1>Invoice</h1>
                        <h6>#{{ $transaction->id }}</h6>
                        <div class="invoice-details mt-2">
                            <h5 style="font-size: 1.2rem">{{config('app.name')}}</h5>


                        </div>
                        <div class="company-contact">
                            <p>
                                <img src="assets/images/ico/mail.png" style="margin-top:7px;">
                                {{ $superAdmin->email }}
                            </p>

                        </div>
                    </div>
                </div>
                <!--/ Invoice Company Details -->

                <!-- Invoice Items Details -->
                <div id="invoice-items-details" class="pt-1 invoice-items-table">
                    <div class="row">
                        <div class="table-responsive col-12">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>DATE</th>
                                        <th>NUMBER OF LOADS</th>
                                        <th>DURATION</th>
                                        <th class="text-right">AMOUNT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ \Carbon\Carbon::parse($transaction->created_at)->format('Y-m-d') }}
                                        </td>
                                        <td>{{ $transaction->load_counter }}</td>
                                        <td>{{ $transaction->from_date }} to {{ $transaction->to_date }}</td>
                                        <td class="text-right">{{ $dollarSign }} {{ $transaction->amount }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!--/ Invoice Items Details -->


            </div>
        </section>
    </div>
</body>

</html>
