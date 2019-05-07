import {SET_FIRST_NAME, SET_LAST_NAME} from './../../Config/actionConstant';
const initialState = {
    firstName: "",
    lastName: ""
}
 const UserNameReducers = function(state = initialState, action) {
    switch(action.type) {
        case SET_FIRST_NAME:
         return Object.assign({}, state, {firstName:action.data});
         case SET_LAST_NAME:
            return Object.assign({}, state, {lastName:action.data})
        
    }

    return state;
}
 export default UserNameReducers;