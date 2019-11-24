import React from 'react';
import {connect} from "react-redux";
import {getTableListSC} from "../../redux/dbTablesReducer";
import MaterialTable from 'material-table'
import ruMaterialTableLocalization from "../db/MaterialTableLocalizationRu";


const TableList = (props) => {

    if (props.yo === 1)
        props.getTableListSC();

    // Get info about columns
    const getColumnsInfo = () => {
        let cols = [];
        for (let col in props.dbTables[0]) {
            cols.push({title: col, field: col})
        }
        return cols;
    };

    const getTablesData = () => {
         return props.dbTables;
    };

    const getTitle = () => {
         return 'Список таблиц Базы Данных';
    };


    return (
        <div>
 {/*           TableList {props.yo}

            {
                props.dbTables.map((val) => {
                        return (
                            <div>id={val.tableId}, nm={val.tableName}, label={val.tableLabel}, info={val.tableInfo}</div>
                        )
                    }
                )
            }
*/}

            <div>
                <MaterialTable

                    actions={[
                        {
                            icon: 'save',
                            tooltip: 'Сохранить',
                            iconProps: {color: 'action'},
                            onClick: (event, rowData) => {

                                alert('yo, ' + rowData.name);
                            }
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Удалить',
                            isFreeAction: true,
                            iconProps: {color: 'action'},
                            onClick: (event, rowData) => {
                                alert("You want to delete " + rowData.name)}
                        }

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
                />
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    yo: state.dbTables.yo,
    dbTables: state.dbTables.dbTables
});

export default connect(mapStateToProps, {getTableListSC})(TableList);
//export default connect ({}, {getTableListSC})(TableList);

