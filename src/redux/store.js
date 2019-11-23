import {applyMiddleware, combineReducers, createStore} from "redux";
import dbTablesReducer from "./dbTablesReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appCommonReducer from "./appCommonReducer";

let reducers = combineReducers({
    dbTables: dbTablesReducer,
    appCommon: appCommonReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;