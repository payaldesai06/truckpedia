<?php

namespace App\Models\FullyCustomized;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FcCustomDataRecordLink extends Model {
  use SoftDeletes;

  protected $table = 'fc_custom_data_record_links';
  protected $guarded = [];

  public function record() {
    return $this->belongsTo(FcCustomRecord::class, 'record_id');
  }

  public function linkedRecord() {
    return $this->belongsTo(FcCustomRecord::class, 'linked_record_id');
  }

  // ToDo: Use eager loading. This is a temporary solution.
  public function getLinkedRecordText($recordId, $primaryField = null, $data = null) {
    if (!$this->linkedRecord) {
      return 'n/a';
    }

    $field = $primaryField ?? $this->linkedRecord->submenu->fcCustomFields()->where('level', 1)->first();

    $data = $field ? $field->data()->where('record_id', $recordId)->first() : null;

    if (!$data) {
      return 'n/a';
    }

    return $data->getValue($recordId) ?? 'n/a';
  }
}
