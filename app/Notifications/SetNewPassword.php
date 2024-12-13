<?php

namespace App\Notifications;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\URL;

class SetNewPassword extends Notification implements ShouldQueue {
  use Queueable;

  /**
   * The callback that should be used to build the mail message.
   *
   * @var Closure|null
   */
  public static $toMailCallback;

  /**
   * Create a new notification instance.
   *
   * @return void
   */
  public function __construct() {
    //
  }

  /**
   * Get the notification's delivery channels.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function via($notifiable) {
    return ['mail'];
  }

  /**
   * Get the mail representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return \Illuminate\Notifications\Messages\MailMessage
   */
  public function toMail($notifiable) {
    $verificationUrl = $this->verificationUrl($notifiable);

    if (static::$toMailCallback) {
      return call_user_func(static::$toMailCallback, $notifiable, $verificationUrl);
    }

    return (new MailMessage)
      ->subject(Lang::get('Set New Password'))
      ->line(Lang::get('Please click the button below to create new password.'))
      ->action(Lang::get('Set New Password'), $verificationUrl)
      ->line(Lang::get('If you did not create an account, no further action is required.'));
  }

  /**
   * Get the array representation of the notification.
   *
   * @param  mixed  $notifiable
   * @return array
   */
  public function toArray($notifiable) {
    return [
      //
    ];
  }

  /**
   * Get the verification URL for the given notifiable.
   *
   * @param  mixed  $notifiable
   * @return string
   */
  protected function verificationUrl($notifiable) {
    return URL::temporarySignedRoute(
      'verification.verify',
      Carbon::now()->addMonths(1), // 1 month
      [
        'id' => $notifiable->getKey(),
        'hash' => sha1($notifiable->getEmailForVerification()),
      ]
    );
  }

  /**
   * Set a callback that should be used when building the notification mail message.
   *
   * @param  Closure  $callback
   * @return void
   */
  public static function toMailUsing($callback) {
    static::$toMailCallback = $callback;
  }
}
