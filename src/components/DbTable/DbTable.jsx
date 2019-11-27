import React from 'react';
import {connect} from "react-redux";

import MaterialTable from 'material-table'
import ruMaterialTableLocalization from "../db/ruMaterialTableLocalization";
import {getDbTableFieldsSC} from "../../redux/dbTablesReducer";


const DbTable = (props) => {

    if (props.yo === 1)
       props.getDbTableFieldsSC('table_s', 0);


//    props.getDbTableFieldsSC('table_s', 0);
//    debugger
//    return <div>{props.state.dbTables.yo}</div>;


    const getColumnsInfo = () => {
        return props.columns;
    };

    const getTablesData = () => {
        return []; //props.dbTables;
    };

    const getTitle = () => {
        return 'Список таблиц Базы Данных';
    };


    return (
        <div>
            {/*
            TableList {props.yo}
            {props.dbTables.map((val) => {
                return (
                    <div>id={val.tableId}, nm={val.tableName}, label={val.tableLabel}, info={val.tableInfo}</div>
                )
            })}
*/}
            <div>
                <MaterialTable

                    actions={[
                    ]}

                    title={getTitle()}
                    columns={getColumnsInfo()}
                    data={getTablesData()}

                    options={{
                        filtering: false,
                        grouping: false,
                        search: false,
                        padding: 'dense',
                        maxBodyHeight: 600
                    }}
                    localization={ruMaterialTableLocalization()}

                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
//                                props.dbTablesAddRawAC(newData);
                                resolve();
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
//                                props.dbTablesUpdateRawAC(newData);
                                resolve();
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
//                                props.dbTablesDeleteRawSC(oldData);
                                resolve();

                            })
                    }}
                />
            </div>
        </div>
    )






};

const mapStateToProps = (state) => ({
    yo: state.dbTables.yo,
//    state: state,
    columns: state.dbTables.dbTablesArray[0].tableColumns
});

export default connect(mapStateToProps, {
   getDbTableFieldsSC
})(DbTable);
//export default connect ({}, {getTableListSC})(TableList);

