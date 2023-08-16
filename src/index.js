import React from 'react';
import { createRoot } from 'react-dom/client';
//const container = document.getElementById('App')
//const root = createRoot(container);
//root.render(<App tab="home" />);

import App from './App';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(<App />);