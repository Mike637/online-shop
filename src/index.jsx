import React from 'react'
import App from './views/App/App'
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Router,BrowserRouter} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('wrapper')).render(
<App />
);