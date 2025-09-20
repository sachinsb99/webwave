<?php

// ==================== Form Request Validation (app/Http/Requests/WebDevLeadRequest.php) ====================
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WebDevLeadRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255|regex:/^[\pL\s\-]+$/u',
            'email' => 'required|email:rfc,dns|max:255',
            'mobile' => 'required|string|max:20|regex:/^[\+]?[0-9\s\-\(\)]+$/',
            'company' => 'nullable|string|max:255',
            'projectType' => 'required|string|in:website,ecommerce,webapp,redesign',
            'budget' => 'required|string',
            'timeline' => 'nullable|string|max:100',
            'priority' => 'nullable|string|max:100',
            'source' => 'nullable|string|max:100',
            'query' => 'nullable|string|max:2000',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Please provide your full name.',
            'name.regex' => 'Name should only contain letters, spaces, and hyphens.',
            'email.required' => 'Please provide a valid email address.',
            'email.email' => 'Please provide a valid email format.',
            'mobile.required' => 'Please provide your mobile number.',
            'mobile.regex' => 'Please provide a valid mobile number format.',
            'projectType.required' => 'Please select a project type.',
            'projectType.in' => 'Please select a valid project type.',
            'budget.required' => 'Please select your budget range.',
        ];
    }
}
