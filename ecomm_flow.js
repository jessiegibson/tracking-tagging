// Custom Events for Direct Purchase E-commerce Checkout Flow

// Step 1: Contact Information View
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 1,
  'stepName': 'contact_information',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8
});

// Step 1: Contact Information Completion
window.dataLayer.push({
  'event': 'ecommerce_checkout_step_complete',
  'stepNumber': 1,
  'stepName': 'contact_information',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'userDetails': {
    'hasEmail': true,
    'hasPhone': true
  }
});

// Step 2: Location Selection View
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 2,
  'stepName': 'location_selection',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8
});

// Step 2: Location Selection Completion
window.dataLayer.push({
  'event': 'ecommerce_checkout_step_complete',
  'stepNumber': 2,
  'stepName': 'location_selection',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'locationSelected': <userLocationSelected"> // Dynamically set based on selection
});

// Step 3: Membership Plan Selection View
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 3,
  'stepName': 'membership_plan_selection',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'availablePlans': ['Standard', 'Premium'] // List of plans shown to user
});

// Step 3: Membership Plan Selection Completion
window.dataLayer.push({
  'event': 'ecommerce_checkout_step_complete',
  'stepNumber': 3,
  'stepName': 'membership_plan_selection',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'planSelected': 'Premium', // Dynamically set based on selection
  'planPrice': <PlanPrice>,
  'planDuration': 'Annual',
  'ecommerce': {
    'currencyCode': 'USD',
    'add': {
      'products': [{
        'name': 'Premium Annual Membership',
        'id': 'MEM-PREMIUM-ANNUAL',
        'price':<MEMBERSHIP_PRICE>,
        'brand': 'Sollis Health',
        'category': 'Membership/Premium/Annual',
        'variant': '',
        'quantity': 1
      }]
    }
  }
});

// Step 4: Account Information View
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 4,
  'stepName': 'account_information',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'ecommerce': {
    'checkout': {
      'actionField': {'step': 4},
      'products': [{
        'name': 'Premium Annual Membership',
        'id': 'MEM-PREMIUM-ANNUAL',
        'price':<MEMBERSHIP_PRICE>,
        'brand': 'Sollis Health',
        'category': 'Membership/Premium/Annual',
        'variant': '',
        'quantity': 1
      }]
    }
  }
});

// Step 4: Account Information Completion
window.dataLayer.push({
  'event': 'ecommerce_checkout_step_complete',
  'stepNumber': 4,
  'stepName': 'account_information',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'accountType': 'Individual', // or 'Family' if applicable
  'memberCount': 1 // Number of members covered
});

// Step 5: Referral Source View
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 5,
  'stepName': 'referral_source',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'ecommerce': {
    'checkout': {
      'actionField': {'step': 5},
      'products': [{
        'name': 'Premium Annual Membership',
        'id': 'MEM-PREMIUM-ANNUAL',
        'price':<MEMBERSHIP_PRICE>,
        'brand': 'Sollis Health',
        'category': 'Membership/Premium/Annual',
        'variant': '',
        'quantity': 1
      }]
    }
  }
});

// Step 5: Referral Source Completion
window.dataLayer.push({
  'event': 'ecommerce_checkout_step_complete',
  'stepNumber': 5,
  'stepName': 'referral_source',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'referralSource': 'Social Media Ad', // Dynamically set based on selection
  'referralDetails': {
    'platform': 'Instagram' // Additional details if collected
  }
});

// Step 6: Review Account Details View
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 6,
  'stepName': 'review_account_details',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'ecommerce': {
    'checkout': {
      'actionField': {'step': 6},
      'products': [{
        'name': 'Premium Annual Membership',
        'id': 'MEM-PREMIUM-ANNUAL',
        'price':<MEMBERSHIP_PRICE>,
        'brand': 'Sollis Health',
        'category': 'Membership/Premium/Annual',
        'variant': '',
        'quantity': 1
      }]
    }
  }
});

// Step 6: Review Account Details Completion
window.dataLayer.push({
  'event': 'ecommerce_checkout_step_complete',
  'stepNumber': 6,
  'stepName': 'review_account_details',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'detailsConfirmed': true
});

// Step 7: Membership Agreement View
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 7,
  'stepName': 'membership_agreement',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'ecommerce': {
    'checkout': {
      'actionField': {'step': 7},
      'products': [{
        'name': 'Premium Annual Membership',
        'id': 'MEM-PREMIUM-ANNUAL',
        'price':<MEMBERSHIP_PRICE>,
        'brand': 'Sollis Health',
        'category': 'Membership/Premium/Annual',
        'variant': '',
        'quantity': 1
      }]
    }
  }
});

// Step 7: Membership Agreement Acceptance
window.dataLayer.push({
  'event': 'ecommerce_checkout_step_complete',
  'stepNumber': 7,
  'stepName': 'membership_agreement',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'agreementAccepted': true,
  'agreementTimestamp': new Date().toISOString()
});

// Step 8: Payment Information View
window.dataLayer.push({
  'event': 'ecommerce_checkout_step',
  'stepNumber': 8,
  'stepName': 'payment_information',
  'stepCategory': 'ecommerce_purchase',
  'totalSteps': 8,
  'ecommerce': {
    'checkout': {
      'actionField': {'step': 8},
      'products': [{
        'name': 'Premium Annual Membership',
        'id': <'membership-plan'>,
        'price': <membership-plan-amount>,
        'category': 'Membership/Premium/Annual',
        'variant': '',
        'quantity': 1
      }]
    }
  }
});

// Purchase Completion - Final Conversion
window.dataLayer.push({
  'event': 'ecommerce_purchase_complete',
  'transactionId': 'SOLLIS-' + Date.now(), // Generate unique transaction ID
  'transactionTotal': <transaction-data>,
  'transactionTax': 0.00,
  'membershipDetails': {
    'plan': 'Premium',
    'duration': 'Annual',
    'location': 'Upper East Side',
    'startDate': new Date().toISOString(),
    'membershipId': 'MEM' + Math.floor(Math.random() * 1000000) // Example member ID
  },
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': 'SOLLIS-' + Date.now(),
        'affiliation': 'Sollis Health Online',
        'revenue':<MEMBERSHIP_PRICE>,
        'tax': '0.00',
        'shipping': '0.00',
        'coupon': ''
      },
      'products': [{
        'name': 'Premium Annual Membership',
        'id': 'MEM-PREMIUM-ANNUAL',
        'price':<MEMBERSHIP_PRICE>,
        'brand': 'Sollis Health',
        'category': 'Membership/Premium/Annual',
        'variant': '',
        'quantity': 1,
        'coupon': ''
      }]
    }
  }
});

// Example: Payment Error Event
function trackPaymentError(errorCode, errorMessage) {
  window.dataLayer.push({
    'event': 'ecommerce_payment_error',
    'stepNumber': 8,
    'stepName': 'payment_information',
    'errorCode': errorCode,
    'errorMessage': errorMessage,
    'errorTimestamp': new Date().toISOString()
  });
}

// Example: Checkout Abandonment
function trackCheckoutAbandonment(stepNumber, stepName, reason) {
  window.dataLayer.push({
    'event': 'ecommerce_checkout_abandonment',
    'stepNumber': stepNumber,
    'stepName': stepName,
    'abandonmentReason': reason || 'unknown',
    'timeInCheckout': Math.floor((Date.now() - checkoutStartTime) / 1000), // Seconds in checkout
    'ecommerce': {
      'checkout': {
        'actionField': {'step': stepNumber},
        'products': [{
          'name': 'Premium Annual Membership',
          'id': 'MEM-PREMIUM-ANNUAL',
          'price':<MEMBERSHIP_PRICE>,
          'brand': 'Sollis Health',
          'category': 'Membership/Premium/Annual',
          'variant': '',
          'quantity': 1
        }]
      }
    }
  });
}

// Example: Calculate Cart Value
function measureEcommerceValue() {
  window.dataLayer.push({
    'event': 'ecommerce_cart_value',
    'cartValue': <membership_plan_price>,
    'currency':'USD',
    'cartItems': <number_members>
  });
}

// Example: Checkout Start Timer
let checkoutStartTime = Date.now();
window.dataLayer.push({
  'event': 'ecommerce_checkout_start',
  'checkoutStartTimestamp': new Date().toISOString()
});
