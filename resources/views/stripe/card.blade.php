<!DOCTYPE html>
<html>

<head>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel 8 - Stripe Payment Gateway Integration Example - ItSolutionStuff.com</title>
    <style type="text/css">
        .panel-title {
            display: inline;
            font-weight: bold;
        }

        .display-table {
            display: table;
        }

        .display-tr {
            display: table-row;
        }

        .display-td {
            display: table-cell;
            vertical-align: middle;
            width: 61%;
        }

    </style>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/pace-js@1.2.4/pace.min.js"></script>

</head>



<body>

    <div class="content-body">
        <!-- Basic form layout section start -->
        <section id="basic-form-layouts">
            <div class="row match-height">

                <div class="col-md-6">
                    <div class="card">
                        <?php
                        /*<div class="card-header">
                            <h4 class="card-title" id="basic-layout-colored-form-control">Add</h4>
                        </div>*/
                        ?>
                        <div class="card-content collapse show">
                            <div class="card-body" style="height: 220px;">

                                <div class="form-body">

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="alert alert-success" id="success_msg" style="display: none;">
                                            </div>
                                            <div class="alert alert-danger" id="error_msg" style="display: none;"></div>
                                            <div class="form-group">
                                                <label for="card">
                                                    Card
                                                </label>
                                                <div class="flex-center position-ref full-height">
                                                    <div id="card-element">
                                                        <!-- Elements will create input elements here -->
                                                    </div>
                                                    <!-- We'll put the error messages in this element -->
                                                    <div id="card-errors" role="alert" class="danger"></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <br />
                                <hr>

                                <div class="form-actions" style="position: absolute;right: 20px;">
                                    <a href="{{ route('card') }}"><button type="button" class="btn btn-warning mr-1">
                                            <i class="ft-x"></i> Cancel
                                        </button></a>
                                    <button type="button" class="btn btn-primary" id="add_card">
                                        <i class="fa fa-check-square-o"></i> Save
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
        <!-- // Basic form layout section end -->
    </div>
</body>
<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript">
    $(document).ready(function() {
        let stripe = Stripe('{{ $stripePublicKey }}');
        let elements = stripe.elements();
        let style = {
            base: {
                color: "#32325d",
            }
        };
        let card = elements.create("card", {
            style: style
        });
        card.mount("#card-element");
        card.addEventListener('change', function(event) {
            let displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });

        $('#add_card').click(function() {
            stripe.createPaymentMethod({
                    type: 'card',
                    card: card,
                })
                .then(function(result) {
                    console.log(result);
                    if (!result.error) {
                        Pace.track(function() {

                            $('#success_msg').css('display', 'none');
                            $('#error_msg').css('display', 'none');
                            $.ajaxSetup({
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]')
                                        .attr('content')
                                }
                            });
                            $.ajax({
                                type: 'POST',
                                url: '{{ url('add-card') }}',
                                data: {
                                    payment_method_id: result.paymentMethod.id
                                },
                                dataType: 'json',
                                success: function(result) {
                                    $('.card-body').css('height', '250px');
                                    if (result.result == 1) {
                                        $('#success_msg').text(result.message);
                                        $('#success_msg').css('display',
                                            'block');
                                        window.location.href =
                                            "{{ route('card') }}";
                                    } else {
                                        $('#error_msg').text(result.message);
                                        $('#error_msg').css('display', 'block');
                                    }
                                },
                                error: function(jqXHR, textStatus,
                                    errorThrown) { // What to do if we fail
                                    console.log(JSON.stringify(jqXHR));
                                    console.log("AJAX error: " + textStatus +
                                        ' : ' + errorThrown);
                                }
                            });
                        });
                    }
                });
        });
    });
</script>

</html>
