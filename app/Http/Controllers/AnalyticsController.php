<?php

// ==================== Analytics Controller (app/Http/Controllers/AnalyticsController.php) ====================
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Analytics;

class AnalyticsController extends Controller
{
    public function trackEvent(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'event' => 'required|string|max:100',
            'data' => 'nullable|array',
            'page' => 'nullable|string|max:255',
            'referrer' => 'nullable|string|max:255',
            'timestamp' => 'required|date'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid tracking data'
            ], 422);
        }

        try {
            Analytics::create([
                'event' => $request->event,
                'data' => json_encode($request->data),
                'page' => $request->page,
                'referrer' => $request->referrer,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'session_id' => $request->session()->getId(),
                'tracked_at' => $request->timestamp
            ]);

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Tracking failed'
            ], 500);
        }
    }
}