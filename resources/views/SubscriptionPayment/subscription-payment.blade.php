@component('mail::message')
    # Hi,

    It’s that time again: there’s a new invoice available for your account.

    Invoice Number: {{ $transaction->id }}
    Issue Date: {{ \Carbon\Carbon::parse($transaction->created_at)->format('Y-m-d') }}
    Total: $ {{ number_format($transaction->amount, 2) }}

    Please find attachment for detailed breakdown.

    Thanks,
    {{config('app.name')}} Team
@endcomponent
