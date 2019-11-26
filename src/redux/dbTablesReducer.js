//import {loginApi, userApi} from "../api/api";
//import {stopSubmit} from "redux-form";

//import {dbTablesApi} from "../api/api";


import {dbTablesApi} from "../api/api";

const GET_DB_TABLES_LIST = 'GET_DB_TABLES_LIST';
const DB_TABLES_ADD_RAW = 'DB_TABLES_ADD_RAW';
const DB_TABLES_UPDATE_RAW = 'DB_TABLES_UPDATE_RAW';
const DB_TABLES_DELETE_RAW = 'DB_TABLES_DELETE_RAW';

const GET_DB_TABLE_INFO = 'GET_DB_TABLE_INFO';
const GET_DB_TABLE_FIELDS = 'GET_DB_TABLE_FIELDS';


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
    ],

    // Здесь массив таблиц, которые могут быть одновременно показаны на экране,
    // например, это документ
    // Далее в виде значений идут описания полей,
    //   они всё равно потом заменяться на реальные значения реальных таблиц из базы данных
    dbTablesArray: [
        {
            tableInfo: {
                tableId: 1,
                tableName: "Table name in DB",
                tableLabel: "Название таблицы",
                tableInfo: "Info about table"
            },
            tableColumns: [{
                title: 'Заголовк поля/колонки таблицы БД',
                field: 'Field name in db table',
                type: "oneOf(['string', 'boolean', 'numeric', 'date', 'datetime', 'time', 'currency'])",
                editable: "oneOf(['always', 'onUpdate', 'onAdd', 'never'])",
                initialEditValue: 'Default initial value',
                lookup: {34: 'Выбор', 63: 'значения', 77: 'из списка'},
                hidden: false,
                sorting: true,


            }],
            keyColumnNumbers: [1,2,3],
            tableData: [{}]
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
/*

        case GET_DB_TABLE_FIELDS:
            return {
                ...state,
                dbTables: action.dbTables.map((t) => ({
                    tableId: t.table_rf,
                    tableName: t.table_name,
                    tableLabel: t.t_label,
                    tableInfo: t.t_info
                })), yo: 3
            };

*/

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

export const dbTablesDeleteRawSC = (deletedRaw) => {
    return (dispatch) => {
        setTimeout(() => {
            alert('111');
            //dispatch(dbTablesDeleteRawAC(deletedRaw));
        }, 2000);
    }
};

// ==============  Универсальный табличный компонент ==================

export const getDbTableFieldsAC = (tableNo, tableColumns) => ({
    type: GET_DB_TABLE_FIELDS
    ,tableNo, tableColumns
});

export const getDbTableFieldsSC = (tableName, tableNo) => {
    return (dispatch) => {
        dbTablesApi.getDbTableFields(tableName)
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(getDbTableFieldsAC(tableNo, response.data));
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