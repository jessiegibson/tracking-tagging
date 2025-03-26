window.dataLayer.push({
  'event': 'contact_form_view',
  'formStep': 'personal_info',
  'formStepNumber': 1,
  'formTotalSteps': 4
});

// Screen 1: When user clicks Next after filling personal info
window.dataLayer.push({
  'event': 'contact_form_progress',
  'formStep': 'personal_info_complete',
  'formStepNumber': 1,
  'formTotalSteps': 4,
  'formFields': {
    'firstName': hash firstName, // Boolean indicating if field was filled
    'lastName': hash lastName,
    'email': hash email,
    'phone': hash phone,
    'ageRange': {{ age group}}  // Value of selected option
  }
});

// Screen 2: Location Selection View
window.dataLayer.push({
  'event': 'contact_form_view',
  'formStep': 'location_selection',
  'formStepNumber': 2,
  'formTotalSteps': 4
});

// Screen 2: When user selects a location and clicks Next
window.dataLayer.push({
  'event': 'contact_form_progress',
  'formStep': 'location_selection_complete',
  'formStepNumber': 2, 
  'formTotalSteps': 4,
  'locationSelected': {{ location selection }} // Value of selected location
});

// Screen 3: Referral Source View
window.dataLayer.push({
  'event': 'contact_form_view',
  'formStep': 'referral_source',
  'formStepNumber': 3,
  'formTotalSteps': 4
});

// Screen 3: When user selects referral source and clicks Next
window.dataLayer.push({
  'event': 'contact_form_progress',
  'formStep': 'referral_source_complete',
  'formStepNumber': 3,
  'formTotalSteps': 4,
  'referralSource': {{ referral source }} // Value of selected referral source
});

// Screen 4: Additional Message View
window.dataLayer.push({
  'event': 'contact_form_view',
  'formStep': 'additional_message',
  'formStepNumber': 4,
  'formTotalSteps': 4
});

// Screen 4: When user submits the form
window.dataLayer.push({
  'event': 'contact_form_submit',
  'formStep': 'form_complete',
  'formStepNumber': 4,
  'formTotalSteps': 4,
  'hasAdditionalMessage': true, // Boolean indicating if optional message was provided
});

// Example of tracking if a user abandons the form (could be triggered on modal close button click)
function trackFormAbandonment() {
  window.dataLayer.push({
    'event': 'contact_form_abandon',
    'formStep': 'location_selection', // The step where abandonment occurred
    'formStepNumber': 2, 
    'formTotalSteps': 4,
    'timeSpentOnForm': 45 // Time in seconds before abandonment (example value)
  });
}

// Example of tracking navigation between steps (when user clicks Previous)
function trackPreviousNavigation(currentStep) {
  window.dataLayer.push({
    'event': 'contact_form_previous',
    'formStepFrom': currentStep,
    'formStepTo': currentStep - 1
  });
}
