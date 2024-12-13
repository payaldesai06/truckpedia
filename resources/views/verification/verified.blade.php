@extends('verification.layout')

@section('content')
    <div class="lg:px-8 mx-auto sm:px-6">
        <h2 class="text-xl text-center font-extrabold tracking-tight text-gray-900 opacity-90 sm:text-2xl">
            <!-- <span class="block">Ready to dive in?</span> -->
            <span class="block text-indigo-600">Password set successfully</span>
        </h2>
        <div class="mt-6 flex items-center justify-center">
            <div class="inline-flex rounded-md shadow">
                <a href="/login" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Go to Login </a>
            </div>
        </div>
    </div>
@endsection
