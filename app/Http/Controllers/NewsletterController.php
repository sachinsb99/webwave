<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscription;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class NewsletterController extends Controller
{
    /**
     * Subscribe to newsletter
     */
    public function subscribe(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255|unique:newsletter_subscriptions,email',
            ]);

            $subscription = NewsletterSubscription::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Successfully subscribed! Welcome to our newsletter.',
                'data' => $subscription
            ], 201);

        } catch (ValidationException $e) {
            // Handle duplicate email case
            if (isset($e->errors()['email'])) {
                $existingSubscription = NewsletterSubscription::where('email', $request->email)->first();
                
                if ($existingSubscription && $existingSubscription->status === NewsletterSubscription::STATUS_UNSUBSCRIBED) {
                    // Reactivate subscription
                    $existingSubscription->resubscribe();
                    return response()->json([
                        'success' => true,
                        'message' => 'Welcome back! Your subscription has been reactivated.',
                        'data' => $existingSubscription
                    ]);
                }

                return response()->json([
                    'success' => false,
                    'message' => 'You are already subscribed to our newsletter.',
                    'errors' => $e->errors()
                ], 422);
            }

            return response()->json([
                'success' => false,
                'message' => 'Please check your information and try again.',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to subscribe. Please try again.',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Unsubscribe from newsletter
     */
    public function unsubscribe($token): JsonResponse
    {
        try {
            $subscription = NewsletterSubscription::where('unsubscribe_token', $token)->firstOrFail();
            $subscription->unsubscribe();

            return response()->json([
                'success' => true,
                'message' => 'Successfully unsubscribed from newsletter.'
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid unsubscribe link'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to unsubscribe',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Get all newsletter subscriptions (admin)
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = NewsletterSubscription::query();

            // Apply filters
            if ($request->has('status')) {
                $query->byStatus($request->status);
            }

            if ($request->has('search')) {
                $query->search($request->search);
            }

            // Pagination
            $limit = $request->get('limit', 10);
            $subscriptions = $query->orderBy('created_at', 'desc')->paginate($limit);

            return response()->json([
                'success' => true,
                'data' => $subscriptions
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch subscriptions',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Get single subscription
     */
    public function show($id): JsonResponse
    {
        try {
            $subscription = NewsletterSubscription::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $subscription
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Subscription not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch subscription',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Update subscription status
     */
    public function updateStatus(Request $request, $id): JsonResponse
    {
        try {
            $validated = $request->validate([
                'status' => 'required|string|in:active,inactive,unsubscribed',
            ]);

            $subscription = NewsletterSubscription::findOrFail($id);
            
            if ($validated['status'] === NewsletterSubscription::STATUS_ACTIVE) {
                $subscription->resubscribe();
            } else {
                $subscription->update(['status' => $validated['status']]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Status updated successfully',
                'data' => $subscription
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Subscription not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update status',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Delete subscription
     */
    public function destroy($id): JsonResponse
    {
        try {
            $subscription = NewsletterSubscription::findOrFail($id);
            $subscription->delete();

            return response()->json([
                'success' => true,
                'message' => 'Subscription deleted successfully'
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Subscription not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete subscription',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Get subscription statistics (admin)
     */
    public function stats(): JsonResponse
    {
        try {
            $stats = [
                'total' => NewsletterSubscription::count(),
                'active' => NewsletterSubscription::active()->count(),
                'unsubscribed' => NewsletterSubscription::where('status', NewsletterSubscription::STATUS_UNSUBSCRIBED)->count(),
                'inactive' => NewsletterSubscription::where('status', NewsletterSubscription::STATUS_INACTIVE)->count(),
                'recent' => NewsletterSubscription::where('created_at', '>=', now()->subDays(30))->count()
            ];

            return response()->json([
                'success' => true,
                'data' => $stats
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch statistics',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }
}