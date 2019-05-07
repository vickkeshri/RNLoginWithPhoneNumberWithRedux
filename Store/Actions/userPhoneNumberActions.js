"use strict";
import { SET_PHONE_NUMBER,SET_OTP } from './../../Config/actionConstant';

export function postPhoneNumberToRedux(payload) {
    return function (dispatch) {
        dispatch({
            type: SET_PHONE_NUMBER,
            data: payload
        })

    }
} 

export function postOtpToRedux(payload) {
    return function (dispatch) {
        dispatch({
            type: SET_OTP,
            data: payload
        })
    }

}