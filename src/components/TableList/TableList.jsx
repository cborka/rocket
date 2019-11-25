import React from 'react';
import {connect} from "react-redux";
import {dbTablesAddRawAC, dbTablesDeleteRawAC, dbTablesUpdateRawAC, getTableListSC} from "../../redux/dbTablesReducer";
import MaterialTable from 'material-table'
import ruMaterialTableLocalization from "../db/MaterialTableLocalizationRu";


const TableList = (props) => {

    if (props.yo === 1)
        props.getTableListSC();

    const getColumnsInfo = () => {
        return props.columns;
    };

    const getTablesData = () => {
        return props.dbTables;
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
                                alert("You want to delete " + rowData.name)
                            }
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

                    editable={{
                        isEditable: rowData => rowData.name === "a", // only name(a) rows would be editable
                        isDeletable: rowData => rowData.name === "b", // only name(a) rows would be deletable
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {

                                //alert(newData.tableName);
                                props.dbTablesAddRawAC(newData);
                                /* const data = this.state.data;
                                data.push(newData);
                                this.setState({ data }, () => resolve()); */

                                resolve();
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {

                                const index = oldData.tableId;
                                props.dbTablesUpdateRawAC(newData);
                                /* const data = this.state.data;
                               const index = data.indexOf(oldData);
                               data[index] = newData;
                               this.setState({ data }, () => resolve()); */
                                resolve();
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        props.dbTablesDeleteRawAC(oldData);
                                        /* let data = this.state.data;
                                        const index = data.indexOf(oldData);
                                        data.splice(index, 1);
                                        this.setState({ data }, () => resolve()); */
                                    }
                                    resolve();
                                }, 1000);
                            })
                    }}
                />
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    yo: state.dbTables.yo,
    dbTables: state.dbTables.dbTables,
    columns: state.dbTables.columns
});

export default connect(mapStateToProps, {getTableListSC, dbTablesAddRawAC, dbTablesUpdateRawAC, dbTablesDeleteRawAC})(TableList);
//export default connect ({}, {getTableListSC})(TableList);

