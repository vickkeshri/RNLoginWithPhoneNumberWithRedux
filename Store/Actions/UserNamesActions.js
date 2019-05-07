"use strict"
import { SET_FIRST_NAME,SET_LAST_NAME } from './../../Config/actionConstant';

export function postFirsNameToRedux(payload) {

    return function(dispatch) {
        dispatch({
            type: SET_FIRST_NAME,
            data: payload
        })
      
    }
}

export function postlastNameToRedux(payload) {

    return function(dispatch) {
        dispatch({
            type: SET_LAST_NAME,
            data: payload
        })
      
    }
}