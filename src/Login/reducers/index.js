import {combineReducers} from 'redux'

import AuthReducer from './authReducers'
import ErrorReducer from './errorReducers'

export default combineReducers(
    {
        auth: AuthReducer,
        errors: ErrorReducer
    }
);