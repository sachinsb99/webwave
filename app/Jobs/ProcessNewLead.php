<?php

// ==================== Queue Job for Email Notifications ====================
namespace App\Jobs;

use App\Models\WebDevLead;
use App\Mail\NewLeadNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class ProcessNewLead implements ShouldQueue
{
    use Queueable, SerializesModels, InteractsWithQueue;

    protected $lead;

    public function __construct(WebDevLead $lead)
    {
        $this->lead = $lead;
    }

    public function handle()
    {
        // Send notification email
        Mail::to(config('app.admin_email'))->send(new NewLeadNotification($this->lead));
        
        // Send welcome email to client
        // Mail::to($this->lead->email)->send(new WelcomeClient($this->lead));
        
        // Update CRM (if integrated)
        // $this->syncWithCRM();
        
        // Track in analytics
        // $this->trackConversion();
    }
}