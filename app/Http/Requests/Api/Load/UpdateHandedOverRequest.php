<?php

namespace App\Http\Requests\Api\Load;

use App\Models\LoadDriver;
use Illuminate\Foundation\Http\FormRequest;

// It seems that this file is no longer needed.
class UpdateHandedOverRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'image_name' => [
                function ($attribute, $value, $fail) {
                    $driver = LoadDriver::find(request('driverLoad'));

                    if ($driver->status != config('constant.status.load_driver.ready_to_handover')) {
                        $fail(config('response.status.driver_load.handover_error'));
                    }
                },
                ''
            ],
            'odometer_reading' => ''
        ];
    }
}
