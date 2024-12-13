@extends('verification.layout')

@section('content')
    <div>
        <h2 class="text-center text-3xl font-extrabold text-gray-700">Set Password</h2>
    </div>

    <form class="space-y-6" action="{{route('set-new-password')}}" method="POST">
        @csrf

        <input type="hidden" name="id" value="{{$user->id}}">

        <div class="rounded-md shadow-sm space-y-2">
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required
                       class="appearance-none rounded relative block w-full px-3 py-2 border @if($errors->first('password')) ?  border-gray-300 : border-red-500 @endif placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Password"/>

                @error('password')
                <span class="text-xs font-semibold text-red-600 leading-none">{{ $message }}</span>
                @enderror
            </div>
            <div>
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input id="password_confirmation" name="password_confirmation" type="password"
                       autocomplete="current-password" required
                       class="appearance-none rounded relative block w-full px-3 py-2 border @if($errors->first('password_confirmation')) ?  border-gray-300 : border-red-500 @endif placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Confirm Password"/>

                @error('password_confirmation')
                <span class="text-xs font-semibold text-red-600 leading-none">{{ $message }}</span>
                @enderror
            </div>
        </div>

        <div>
            <button type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
            </button>
        </div>
    </form>
@endsection
