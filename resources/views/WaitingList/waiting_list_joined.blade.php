@component('mail::message')
# Hey, {{$waitingList->company_name}} just joined waiting list.

- Company Name: {{$waitingList->company_name}}
- Email: {{$waitingList->email}}
- Phone Number: {{$waitingList->phone_number}}
- No. of Trucks: {{$waitingList->number_of_trucks}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
