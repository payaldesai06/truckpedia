<?php

namespace App\Providers;

use App\Models\loadImage;
use App\Observers\LoadImageObserver;
use Illuminate\Queue\Events\JobFailed;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\ServiceProvider;
use Stripe\StripeClient;

class AppServiceProvider extends ServiceProvider {
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register() {
    app()->singleton('stripe', function ($app) {
      if (app()->environment('production')) {
        return new StripeClient(config('constant.stripe_key.production.secret'));
      } else {
        return new StripeClient(config('constant.stripe_key.sandbox.secret'));
      }
    });
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot() {
    loadImage::observe(LoadImageObserver::class);

    Queue::failing(function (JobFailed $event) {
      Log::channel('slack')->emergency($event->exception->getMessage());
    });
  }
}
