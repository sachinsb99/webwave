<?php

namespace App\Http\Controllers;

use App\Models\WebDevLead;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;

class WebDevController extends Controller
{
    /**
     * Store a new lead
     */
    public function storeLead(Request $request): JsonResponse
    {
        // Log::info('storeLead: ', $request->all());
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'mobile' => 'required|string|max:20',
                'company' => 'nullable|string|max:255',
                'projectType' => 'required|string|max:50',
                'budget' => 'required|string|max:50',
                'timeline' => 'nullable|string|max:50',
                'query' => 'nullable|string|max:1000',
                'priority' => 'nullable|string|max:100',
                'source' => 'nullable|string|max:50',
            ]);

            $lead = WebDevLead::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Lead submitted successfully',
                'data' => $lead
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Get all leads with pagination and filters
     */
    public function getLeads(Request $request): JsonResponse
    {
        try {
            $query = WebDevLead::query();

            // Apply filters
            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            if ($request->has('project_type')) {
                $query->where('projectType', $request->project_type);
            }

            if ($request->has('budget')) {
                $query->where('budget', $request->budget);
            }

            if ($request->has('search')) {
                $search = $request->search;
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'LIKE', "%{$search}%")
                      ->orWhere('email', 'LIKE', "%{$search}%")
                      ->orWhere('company', 'LIKE', "%{$search}%");
                });
            }

            // Pagination
            $limit = $request->get('limit', 10);
            $leads = $query->orderBy('created_at', 'desc')->paginate($limit);

            return response()->json([
                'success' => true,
                'data' => $leads
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch leads',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Get single lead
     */
    public function getLead($id): JsonResponse
    {
        try {
            $lead = WebDevLead::findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => $lead
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Lead not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch lead',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Update lead status
     */
    public function updateLeadStatus(Request $request, $id): JsonResponse
    {
        try {
            $validated = $request->validate([
                'status' => 'required|string|in:new,contacted,qualified,quoted,won,lost',
                'notes' => 'nullable|string|max:1000'
            ]);

            $lead = WebDevLead::findOrFail($id);
            $lead->update([
                'status' => $validated['status'],
                'notes' => $validated['notes'] ?? $lead->notes
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Lead status updated successfully',
                'data' => $lead
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
                'message' => 'Lead not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update lead status',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }

    /**
     * Delete lead
     */
    public function deleteLead($id): JsonResponse
    {
        try {
            $lead = WebDevLead::findOrFail($id);
            $lead->delete();

            return response()->json([
                'success' => true,
                'message' => 'Lead deleted successfully'
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Lead not found'
            ], 404);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete lead',
                'error' => config('app.debug') ? $e->getMessage() : 'Internal server error'
            ], 500);
        }
    }
}