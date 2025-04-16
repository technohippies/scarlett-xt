import React from 'react';
import { renderRoot } from '../../src/entry-helpers/renderRoot'; // Use the helper
import ChatPage from './ChatPage';
import '../../src/index.css'; // Import global styles

renderRoot(<ChatPage />); // Use the helper to render ChatPage 