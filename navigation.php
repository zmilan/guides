<?php

return [
    'Getting Started' => [
        'children' => [
            'API' => [
                'children' => [
                    'Installation' => 'docs/api/installation',
                    'Configuration' => 'docs/api/configuration',
                    'Order Lifecycle' => 'docs/api/order-lifecycle',
                ]
            ],
            'Admin Hub' => [
                'children' => [
                    'Installation' => 'docs/hub/installation'
                ]
            ]
        ],
    ],
    'Extending the API' => [
        'children' => [
            'Custom Payment Providers' => 'docs/api/extending/payment-providers'
        ]
    ]
];
