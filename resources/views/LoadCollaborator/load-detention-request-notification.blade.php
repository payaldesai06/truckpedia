@component('mail::layout')
  {{-- Header --}}
  @slot('header')
    @component('mail::header', ['url' => config('app.url')])
    @endcomponent
  @endslot

  # Hello,

  For Load #{{$load->refrence_id}}, our driver arrived at the {{$detentionDetails->location}} at {{$detentionDetails->arrivedTime}}, and our driver left at {{$detentionDetails->departedTime}}.

  We need {{$detentionDetails->hours}} of detention, at ${{$detentionDetails->chargePerHour}} per hour, so the total should be ${{$detentionDetails->amount}}. Please send over revised rate confirmation.

  Thank You,

  {{ $businessName }}

  {{-- Subcopy --}}
  @slot('subcopy')
    @component('mail::subcopy')
      <p> If you receive an email that seems fradulent, please confirm with the business owner before paying.
      </p>
    @endcomponent
  @endslot


  {{-- Footer --}}
  @slot('footer')
    @component('mail::footer')
      <p>
        <span>COPYRIGHT &copy;</span>
        <span>{{ now()->year }} </span>
        <a :href="{{ config('app.url') }}" target="_blank" rel="nofollow">{{ config('app.name') }}</a>
        <span class="hidden sm:inline-block">, All rights Reserved</span>
      </p>
      <p>{{config('app.name')}} - "Capacity solutions platform designed to automate your operations with AI."</p>
    @endcomponent
  @endslot
@endcomponent
