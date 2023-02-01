const SET_GOODS = "SET_GOODS"

const defaultState = {
goods:[]
}

export const getGoodsReducer = (state = defaultState,action) => {
switch (action.type)
{
case SET_GOODS:
    return  { ...state,goods:action.payload}
default:
    return state
}
}


export const setGoods = (good) => ({type:SET_GOODS,payload:good })