import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { searchReducer } from './searchReducer'
import { getGoodsReducer } from './getGoodsReducer'

const mainReducer = combineReducers({
  search: searchReducer,
  getGoods: getGoodsReducer,
})

const store = configureStore(
  { reducer: mainReducer },
  composeWithDevTools(applyMiddleware(thunk)),
)

export default store
