<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ExpenseType\CreateExpenseTypeRequest;
use App\Http\Requests\Api\ExpenseType\UpdateExpenseTypeRequest;
use App\Http\Resources\ExpenseType\ExpenseTypeCollection;
use App\Http\Resources\ExpenseType\ExpenseTypeResource;
use App\Services\ExpenseTypeService;
use Illuminate\Http\Request;

class ExpenseTypeController extends Controller
{
    protected $expenseTypeService;

    public function __construct(ExpenseTypeService $expenseTypeService)
    {
        $this->expenseTypeService = $expenseTypeService;
    }

    public function index()
    {
        $expenseTypes = $this->expenseTypeService->getAllExpenseType();
        return $this->respondWithData(new ExpenseTypeCollection($expenseTypes));
    }

    public function datatable()
    {
        $expenseTypes = $this->expenseTypeService->getAllExpenseTypedatatable();
        return $this->respondWithData(new ExpenseTypeCollection($expenseTypes));
    }

    public function store(CreateExpenseTypeRequest $request)
    {

        $expenseType = $this->expenseTypeService->create();
        // return $languageLabel;
        return $this->respondWithMessageAndPayload(new ExpenseTypeResource($expenseType), config('response.expense_type.create'));
    }

    public function update(UpdateExpenseTypeRequest $request)
    {

        $expenseType = $this->expenseTypeService->update();
        // return $languageLabel;
        return $this->respondWithMessageAndPayload(new ExpenseTypeResource($expenseType), config('response.expense_type.update'));
    }
}
