import {applyMiddleware, combineReducers, createStore} from "redux";
import dbTablesReducer from "./dbTablesReduser";
import thankMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    dbTables: dbTablesReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thankMiddleware));

export default store;