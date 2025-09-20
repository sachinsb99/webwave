<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => array_filter([
        // Development URLs
        env('APP_ENV') === 'local' ? 'http://localhost:3000' : null,
        env('APP_ENV') === 'local' ? 'http://localhost:3001' : null,
        env('APP_ENV') === 'local' ? 'http://127.0.0.1:3000' : null,
        env('APP_ENV') === 'local' ? 'http://127.0.0.1:3001' : null,
        
        // Frontend URL from environment
        env('FRONTEND_URL'),
        
        // Production/staging URLs
        env('APP_ENV') === 'production' ? env('APP_URL') : null,
    ]),

    'allowed_origins_patterns' => [
        // Allow subdomains in production
        // '/^https:\/\/.*\.yourdomain\.com$/'
    ],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];

/*
|--------------------------------------------------------------------------
| Environment Variables to Add (.env)
|--------------------------------------------------------------------------
|
| Add these to your .env file:
|
| # Frontend URL
| FRONTEND_URL=http://localhost:3000
|
| # In production:
| FRONTEND_URL=https://yourfrontend.com
| APP_URL=https://yourapi.com
|
*/