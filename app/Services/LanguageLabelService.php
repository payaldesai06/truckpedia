<?php


namespace App\Services;

use App\Models\LanguageLabel;
use Illuminate\Support\Facades\Auth;

class LanguageLabelService
{
    public function getAllLanguageLabelDatatable()
    {
        $per_page = request('rows') ?? config('response.per_page');

        return LanguageLabel::when(request()->has('label_name'), function ($query) {
            return $query->where('label_name', 'like', '%' . request('label_name') . '%');
        })
            ->when(request()->has('label_english'), function ($query) {
                return $query->where('label_english', 'like', '%' . request('label_english') . '%');
            })
            ->when(request()->has('label_chinese'), function ($query) {
                return $query->where('label_chinese', 'like', '%' . request('label_chinese') . '%');
            })
            ->when(
                request()->has('sortField') && request()->has('sortOrder'),
                function ($query) {
                    return $query->orderBy(request('sortField'), request('sortOrder'));
                }
            )
            ->paginate($per_page);
    }

    public function getAllLanguageLabel()
    {
        return LanguageLabel::get();
    }

    public function create()
    {
        return LanguageLabel::create($this->getValidatedData());
    }

    public function update()
    {
        return tap($this->getLanguageLabel())->update($this->getValidatedData());
    }

    private function getLanguageLabel()
    {
        return LanguageLabel::findOrFail(request('languageLabel'));
    }

    private function getValidatedData()
    {
        return [
            'label_name' => request('label_name'),
            'label_english' => request('label_english'),
            'label_chinese' => request('label_chinese'),
        ];
    }

    public function delete()
    {
        return tap($this->getLanguageLabel())->forceDelete();
    }
}
