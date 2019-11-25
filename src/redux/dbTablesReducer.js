//import {loginApi, userApi} from "../api/api";
//import {stopSubmit} from "redux-form";

//import {dbTablesApi} from "../api/api";


import {dbTablesApi} from "../api/api";

const GET_DB_TABLES_LIST = 'GET_DB_TABLES_LIST';
const DB_TABLES_ADD_RAW = 'DB_TABLES_ADD_RAW';
const DB_TABLES_UPDATE_RAW = 'DB_TABLES_UPDATE_RAW';
const DB_TABLES_DELETE_RAW = 'DB_TABLES_DELETE_RAW';

let initialState = {
    yo: 1,
    columns: [
        {title: 'tableId', field: 'tableId', type: 'numeric', editable: 'onAdd', initialEditValue: '0'},
        {title: 'tableName', field: 'tableName', initialEditValue: 'туцАшудв'},
        {title: 'tableLabel', field: 'tableLabel', 'hidden': false},
        {title: 'tableInfo', field: 'tableInfo', hfhfhfhf: 'dddddjjsj'},
    ],

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
        case DB_TABLES_ADD_RAW:
            return {
                ...state,
                dbTables: [...state.dbTables, action.newRaw]
            };
        case DB_TABLES_UPDATE_RAW:
            return {
                ...state,
                dbTables: state.dbTables.map((t) => {
                    if (t.tableId === action.updatedRaw.tableId) {
                        t = action.updatedRaw
                    }
                    return t;
                })
            };
       case DB_TABLES_DELETE_RAW:
            return {
                ...state,
                dbTables: state.dbTables.filter((t) => (t.tableId !== action.deletedRaw.tableId))
            };
        default:
            return state;
    }
};

export const getDbTablesInfoAC = (dbTables) => ({
    type: GET_DB_TABLES_LIST
    , dbTables   //: [{tableId, tableName, tableLabel, tableInfo}, ...]
});

export const dbTablesAddRawAC = (newRaw) => ({
    type: DB_TABLES_ADD_RAW
    , newRaw   //: {tableId, tableName, tableLabel, tableInfo}
});

export const dbTablesUpdateRawAC = (updatedRaw) => ({
    type: DB_TABLES_UPDATE_RAW
    , updatedRaw   //: {tableId, tableName, tableLabel, tableInfo}
});

export const dbTablesDeleteRawAC = (deletedRaw) => ({
    type: DB_TABLES_DELETE_RAW
    , deletedRaw   //: {tableId, tableName, tableLabel, tableInfo}
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