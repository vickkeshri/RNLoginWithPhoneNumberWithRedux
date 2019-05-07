import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserNameReducers from './Reducers/UserNamesReducers';
import UserPhoneNumberReducers from './Reducers/userPhoneNumberReducers';

const allStore = combineReducers({
    UserNameReducers,
    UserPhoneNumberReducers
})

const store = createStore(
    allStore,
    applyMiddleware(thunk)
);

export default store;