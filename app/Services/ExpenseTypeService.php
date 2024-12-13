<?php


namespace App\Services;

use App\Models\ExpenseType;
use Illuminate\Support\Facades\Auth;

class ExpenseTypeService
{
    public function getAllExpenseTypedatatable()
    {
        $per_page = request('rows') ?? config('response.per_page');
        $companyId = Auth::user()->admin_company_detail_id;
        return ExpenseType::where('company_id', '=', $companyId)
            ->when(request()->has('title'), function ($query) {
                return $query->where('title', 'like', '%' . request('title') . '%');
            })
            ->when(request()->has('sortField') && request()->has('sortOrder'), function ($query) {
                return $query->orderBy(request('sortField'), request('sortOrder'));
            })
            ->paginate($per_page);
    }

    public function getAllExpenseType()
    {
        $companyId = Auth::user()->admin_company_detail_id;
        return ExpenseType::where('company_id', '=', $companyId)
            ->get();
    }

    public function create()
    {
        return ExpenseType::create($this->getValidatedData());
    }

    public function update()
    {
        return tap($this->getExpenseType())->update($this->getValidatedData());
    }

    private function getExpenseType()
    {
        return ExpenseType::findOrFail(request('expenseType'));
    }

    private function getValidatedData()
    {
        return [
            'title' => request('title'),
            'company_id' => Auth::user()->admin_company_detail_id
        ];
    }
}
