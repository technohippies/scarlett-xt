import React from 'react';
import { renderRoot } from '../../src/entry-helpers/renderRoot'; // Use the helper
import OnboardingRouter from './OnboardingRouter'; // Import the router for this entrypoint
import '../../src/index.css'; // Import global styles

// Render the OnboardingRouter using the helper
renderRoot(<OnboardingRouter />); 