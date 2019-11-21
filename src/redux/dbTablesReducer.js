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
            tableLabel: "Таблицы",
            tableInfo: "DB Tables"
        },
        {
            tableId: 2,
            tableName: "fields_l",
            tableLabel: "Поля таблиц",
            tableInfo: "DB Fields"
        }
    ]
};

let dbTablesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DB_TABLES_LIST:
            return {
                ...state,
                dbTables: action.dbTables.map((t) => ({
                    tableId: t.table_rf,
                    tableName: t.table_name,
                    tableLabel: t.t_label,
                    tableInfo: t.t_info
                })), yo: 3
            };
        default:
            return state;
    }
};

export const getDbTablesInfoAC = (dbTables) => ({
    type: GET_DB_TABLES_LIST
    , dbTables   //: {tableId, tableName, tableLabel, tableInfo}
});


export const getTableListSC = () => {
    return (dispatch) => {
        dbTablesApi.getTablesList()
            .then(response => {
                if (response.data.status === 1) { //data.resultCode === 0) {
                    dispatch(getDbTablesInfoAC(response.data.data));
                } else {
                    alert(response.data.errorMessage)
                }
            })
            .catch(function (error) {
                    alert(error);
                }
            )
    }
};


export default dbTablesReducer;