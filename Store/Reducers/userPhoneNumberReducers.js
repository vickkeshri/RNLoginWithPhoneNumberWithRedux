import { SET_PHONE_NUMBER,SET_OTP } from './../../Config/actionConstant';

const initialState = {
    phoneNumber: "",
    otp: ""
}

const UserPhoneNumberReducers = function (state=initialState, action) {
    switch(action.type) {
        case SET_PHONE_NUMBER:
        return Object.assign({}, state, {phoneNumber: action.data})
        case SET_OTP:
            return Object.assign({}, state, {otp: action.data})
    }
    return state;
}

export default UserPhoneNumberReducers;