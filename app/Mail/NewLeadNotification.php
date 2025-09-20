<?php

// ==================== Email Notification (app/Mail/NewLeadNotification.php) ====================
namespace App\Mail;

use App\Models\WebDevLead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewLeadNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $lead;

    public function __construct(WebDevLead $lead)
    {
        $this->lead = $lead;
    }

    public function build()
    {
        return $this->subject('New Web Development Lead - ' . $this->lead->name)
                    ->view('emails.new-lead')
                    ->with([
                        'lead' => $this->lead,
                        'reference' => 'WD-' . str_pad($this->lead->id, 6, '0', STR_PAD_LEFT)
                    ]);
    }
}
