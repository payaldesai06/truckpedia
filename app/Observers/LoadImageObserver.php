<?php

namespace App\Observers;

use App\MOdels\loadImage;
use Illuminate\Support\Facades\Auth;

class LoadImageObserver {
  public function created(loadImage $loadImage) {
    if (
      empty($loadImage->load_id) && !empty($loadImage->loadDriver)
      && Auth::user()->role == config('constant.roles.driver')
    ) {
      $loadImage->update([
        'load_id' => $loadImage->loadDriver->load_id
      ]);
    }
  }
}
