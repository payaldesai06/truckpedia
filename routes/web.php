<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Set New Password
Route::get('email/verify/{id}', 'VerificationController@verify')->name('verification.verify');
Route::post('/set-new-password', 'SetNewPassword@update')->name('set-new-password');
Route::view('/email/invalid', 'verification.email.invalid')->name('email.invalid');

Route::any('/qbd/qbwc', 'Qbd\QbwcController@handleQbwc');
  /*
  This function creates database tables for QuickBooks Desktop integration.
  To create the tables, make sure consolibyte/quickbooks is installed by 
  running commands like "composer update consolibyte/quickbooks. Then 
  uncomment the following line in routes/web.php and access 
  http://localhost:8000/qbd/initializeDatabase once.
  Route::any('/qbd/initializeDatabase', 'Qbd\QbwcController@initializeDatabase');
  */
// Route::any('/qbd/initializeDatabase', 'Qbd\QbwcController@initializeDatabase');

//stripe view demo
// Route::get('card', 'Api\StripeCardController@cardView')->name('card');
// Route::post('/add-card', 'Api\StripeController@demoCardCreate');

//SPA Route
Route::get('/{any}', 'ApplicationController')->where('any', '.*');
