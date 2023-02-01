import thunk from "redux-thunk"
import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import {searchReducer} from './searchReducer'

const mainReducer = combineReducers({
    search:searchReducer
})

const store = configureStore({reducer:mainReducer},composeWithDevTools(applyMiddleware(thunk)))

export default store