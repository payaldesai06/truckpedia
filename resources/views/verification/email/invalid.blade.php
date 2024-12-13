@extends('verification.layout')

@section('content')
    <h2 class="text-center text-lg font-extrabold tracking-tight text-red-600">
        <span class="block">Token is invalid or expired.</span>
    </h2>

    <div class="mt-8 flex items-center justify-center">
        <div class="inline-flex rounded-md shadow">
            <a href="/login"
               class="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Go to Home Page </a>
        </div>
    </div>
@endsection
