import React from 'react'
import App from './views/App/App'
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('wrapper')).render(
<App />
);