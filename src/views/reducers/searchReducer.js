

const SET_VALUE = "SET_VALUE";

const defaultState = {
    value:"",
}


export const searchReducer = (state = defaultState,  action) =>
{
switch (action.type)
{
case SET_VALUE:
    return {...state,value:action.payload}
default:
    return state
}
}


export const setValue = (val) => ({type:SET_VALUE, payload:val })
