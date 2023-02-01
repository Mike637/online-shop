import React from 'react'
import App from './views/App/App'
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import store from './views/reducers/mainReducer'
import { Router,BrowserRouter} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('wrapper')).render(
<Provider store={store}>
<App />
</Provider>
);