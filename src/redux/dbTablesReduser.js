//import {loginApi, userApi} from "../api/api";
//import {stopSubmit} from "redux-form";

//import {dbTablesApi} from "../api/api";


import {dbTablesApi} from "../api/api";

const GET_DB_TABLES_LIST = 'GET_DB_TABLES_LIST';

let initialState = {
    yo: 1,
    dbTables: [
        {
            tableId: 1,
            tableName: "tables_l",
            tableInfo: "DB Tables"
        },
        {
            tableId: 2,
            tableName: "fields_l",
            tableInfo: "DB Fields"
        }
    ]
};

let dbTablesReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_DB_TABLES_LIST:
            debugger
            return {...state, yo: 3};

        default:
            return state;
    }
};

export const getDbTablesInfoAC = () => ({
    type: GET_DB_TABLES_LIST
//    , dbTables: {tableId, tableName, tableInfo}
});


export const getTableListSC = () => {

    return (dispatch) => {
        dbTablesApi.getTablesList()
            .then(response => {
//                debugger
                if (response) { //data.resultCode === 0) {
//                    debugger
                    console.log(response);
                    //                    dispatch(getDbTablesInfoAC());
                }
            });

    }
};


export default dbTablesReduser;