<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' =>'required',
            'contact' => 'nullable|string',
            'email' => 'nullable|email|unique:stores,email',
            'phone' => 'nullable|string',
            'cnpj' => 'required|string',
            'number' => 'nullable|string',
            'complement' => 'nullable|string',
            'zip_code_id' => 'required|exists:zip_codes,id',
        ];
    }
}
