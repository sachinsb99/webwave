<?php

use App\Http\Controllers\WebDevController;
use App\Http\Controllers\AnalyticsController;

Route::prefix('web-dev')->group(function () {
    // Lead Management
    Route::post('/leads', [WebDevController::class, 'storeLead']);
    Route::get('/leads', [WebDevController::class, 'getLeads']);
    Route::get('/leads/{id}', [WebDevController::class, 'getLead']);
    Route::patch('/leads/{id}/status', [WebDevController::class, 'updateLeadStatus']);
    Route::delete('/leads/{id}', [WebDevController::class, 'deleteLead']);
    
    // Portfolio & Projects
    Route::get('/portfolio', [WebDevController::class, 'getPortfolio']);
    Route::get('/portfolio/{id}', [WebDevController::class, 'getProjectDetails']);
    Route::post('/portfolio/{id}/inquire', [WebDevController::class, 'submitProjectInquiry']);
    
    // Services & Pricing
    Route::get('/services', [WebDevController::class, 'getServiceCategories']);
    Route::get('/pricing', [WebDevController::class, 'getPricingPackages']);
    Route::post('/quotes', [WebDevController::class, 'requestCustomQuote']);
    
    // File Upload
    Route::post('/upload', [WebDevController::class, 'uploadFile']);
    
    // Communication
    Route::post('/contact', [WebDevController::class, 'submitContactForm']);
    Route::post('/newsletter', [WebDevController::class, 'subscribeNewsletter']);
    Route::post('/testimonials', [WebDevController::class, 'submitTestimonial']);
    Route::get('/testimonials', [WebDevController::class, 'getTestimonials']);
    
    // Consultation
    Route::post('/consultation', [WebDevController::class, 'scheduleConsultation']);
    Route::get('/consultation/slots', [WebDevController::class, 'getConsultationSlots']);
    
    // FAQ
    Route::get('/faqs', [WebDevController::class, 'getFAQs']);
    Route::post('/faqs/ask', [WebDevController::class, 'submitFAQQuestion']);
    
    // Analytics
    Route::post('/analytics/track', [AnalyticsController::class, 'trackEvent']);
    
    // System
    Route::get('/status', [WebDevController::class, 'getSystemStatus']);
});

Route::get('/health', function () {
    return response()->json(['status' => 'ok', 'timestamp' => now()]);
});