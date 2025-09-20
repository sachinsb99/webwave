<?php

// ==================== API Resource for Consistent Responses ====================
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WebDevLeadResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'reference' => 'WD-' . str_pad($this->id, 6, '0', STR_PAD_LEFT),
            'name' => $this->name,
            'email' => $this->email,
            'mobile' => $this->mobile,
            'company' => $this->company,
            'project_type' => $this->project_type,
            'budget' => $this->budget,
            'timeline' => $this->timeline,
            'priority' => $this->priority,
            'source' => $this->source,
            'status' => $this->status,
            'submitted_at' => $this->submitted_at->format('Y-m-d H:i:s'),
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}