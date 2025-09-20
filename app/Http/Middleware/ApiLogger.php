<?php

// ==================== Middleware for API Logging ====================
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ApiLogger
{
    public function handle(Request $request, Closure $next)
    {
        $startTime = microtime(true);
        
        // Log request
        Log::info('API Request', [
            'method' => $request->method(),
            'url' => $request->fullUrl(),
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
            'payload' => $request->method() === 'GET' ? $request->query() : $request->all()
        ]);

        $response = $next($request);

        // Log response
        $endTime = microtime(true);
        $duration = round(($endTime - $startTime) * 1000, 2);

        Log::info('API Response', [
            'status' => $response->status(),
            'duration' => $duration . 'ms',
            'memory' => round(memory_get_peak_usage() / 1024 / 1024, 2) . 'MB'
        ]);

        return $response;
    }
}
