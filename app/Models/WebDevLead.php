<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebDevLead extends Model
{
    use HasFactory;

    protected $table = 'web_dev_leads';

    protected $fillable = [
        'name',
        'email',
        'mobile',
        'company',
        'projectType',
        'budget',
        'timeline',
        'query',
        'priority',
        'source',
        'status',
        'notes'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Scopes for filtering
    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    public function scopeByProjectType($query, $projectType)
    {
        return $query->where('projectType', $projectType);
    }

    public function scopeByBudget($query, $budget)
    {
        return $query->where('budget', $budget);
    }

    public function scopeSearch($query, $search)
    {
        return $query->where(function ($q) use ($search) {
            $q->where('name', 'LIKE', "%{$search}%")
              ->orWhere('email', 'LIKE', "%{$search}%")
              ->orWhere('company', 'LIKE', "%{$search}%");
        });
    }

    // Status constants
    const STATUS_NEW = 'new';
    const STATUS_CONTACTED = 'contacted';
    const STATUS_QUALIFIED = 'qualified';
    const STATUS_QUOTED = 'quoted';
    const STATUS_WON = 'won';
    const STATUS_LOST = 'lost';

    public static function getStatusOptions()
    {
        return [
            self::STATUS_NEW => 'New',
            self::STATUS_CONTACTED => 'Contacted',
            self::STATUS_QUALIFIED => 'Qualified',
            self::STATUS_QUOTED => 'Quoted',
            self::STATUS_WON => 'Won',
            self::STATUS_LOST => 'Lost',
        ];
    }

    // Project type constants
    const PROJECT_WEBSITE = 'website';
    const PROJECT_ECOMMERCE = 'ecommerce';
    const PROJECT_WEBAPP = 'webapp';
    const PROJECT_REDESIGN = 'redesign';

    public static function getProjectTypeOptions()
    {
        return [
            self::PROJECT_WEBSITE => 'Business Website',
            self::PROJECT_ECOMMERCE => 'E-commerce Store',
            self::PROJECT_WEBAPP => 'Web Application',
            self::PROJECT_REDESIGN => 'Website Redesign',
        ];
    }
}