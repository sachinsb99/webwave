<?php

// ==================== Command for Cleanup ====================
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Analytics;
use Carbon\Carbon;

class CleanupAnalytics extends Command
{
    protected $signature = 'cleanup:analytics {--days=30}';
    protected $description = 'Clean up old analytics data';

    public function handle()
    {
        $days = $this->option('days');
        $cutoff = Carbon::now()->subDays($days);
        
        $deleted = Analytics::where('tracked_at', '<', $cutoff)->delete();
        
        $this->info("Deleted {$deleted} analytics records older than {$days} days");
    }
}