<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class NewsletterSubscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'status',
        'subscribed_at',
        'unsubscribed_at',
        'unsubscribe_token'
    ];

    protected $casts = [
        'subscribed_at' => 'datetime',
        'unsubscribed_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Status constants
    const STATUS_ACTIVE = 'active';
    const STATUS_INACTIVE = 'inactive';
    const STATUS_UNSUBSCRIBED = 'unsubscribed';

    public static function getStatusOptions()
    {
        return [
            self::STATUS_ACTIVE => 'Active',
            self::STATUS_INACTIVE => 'Inactive',
            self::STATUS_UNSUBSCRIBED => 'Unsubscribed',
        ];
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', self::STATUS_ACTIVE);
    }

    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    public function scopeSearch($query, $search)
    {
        return $query->where(function ($q) use ($search) {
            $q->where('name', 'LIKE', "%{$search}%")
              ->orWhere('email', 'LIKE', "%{$search}%");
        });
    }

    // Boot method to generate unsubscribe token
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (!$model->unsubscribe_token) {
                $model->unsubscribe_token = Str::random(64);
            }
            if (!$model->subscribed_at) {
                $model->subscribed_at = now();
            }
        });
    }

    // Methods
    public function unsubscribe()
    {
        $this->update([
            'status' => self::STATUS_UNSUBSCRIBED,
            'unsubscribed_at' => now()
        ]);
    }

    public function resubscribe()
    {
        $this->update([
            'status' => self::STATUS_ACTIVE,
            'unsubscribed_at' => null
        ]);
    }

    public function getUnsubscribeUrl()
    {
        return url('/newsletter/unsubscribe/' . $this->unsubscribe_token);
    }
}