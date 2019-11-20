import {applyMiddleware, combineReducers, createStore} from "redux";
import dbTablesReducer from "./dbTablesReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    dbTables: dbTablesReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;