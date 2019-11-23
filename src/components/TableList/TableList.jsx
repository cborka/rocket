import React from 'react';
import {connect} from "react-redux";
import {getTableListSC} from "../../redux/dbTablesReducer";
import MaterialTable from 'material-table'


const TableList = (props) => {

    if (props.yo === 1)
        props.getTableListSC();

    return (
        <div>
            TableList {props.yo}
{/*
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
                            tooltip: 'Save User',
                            iconProps: {color: 'action'},
                            onClick: (event, rowData) => {

                                alert('yo, ' + rowData.name);
                            }
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Delete User',
                            isFreeAction: true,
                            iconProps: {color: 'action'},
                            onClick: (event, rowData) => {
                                alert("You want to delete " + rowData.name)}
                        }

                    ]}

                    title="Material Table Demo Title"
                    columns={[
                        {title: 'Id', field: 'id'},
                        {title: 'Name', field: 'name'},
                        {title: 'Г.Р.', field: 'birthYear', type: 'numeric',  render: rowData => (rowData.birthYear + " год")},
                        {title: 'BirthCity', field: 'birthCity', lookup: {34: 'Томск', 63: 'Москва', 11: 'Новосибирск'}}
                    ]}

                    data={[
                        {id: 1, name: 'Bor', birthYear: 1987, birthCity: 63},
                        {id: 2, name: 'Bob', birthYear: 1977, birthCity: 34},
                        {id: 3, name: 'Brian', birthYear: 1999, birthCity: 63},
                        {id: 4, name: 'Benji', birthYear: 1966, birthCity: 34},
                        {id: 7, name: 'Иванко', birthYear: 1988, birthCity: 11}
                    ]}
                    detailPanel={rowData => {
                        return (
                            <div>detailPanel: {rowData.name}</div>
                        )
                    }}
                    options={{
                        filtering: false,
                        grouping: false,
                        padding: 'dense',
                        maxBodyHeight: 600
                    }}
                    localization={{
                        body: {
                            emptyDataSourceMessage: 'Нет данных'
                        },
                        toolbar: {
                            searchTooltip: 'Поиск'
                        },
                        pagination: {
                            labelRowsSelect: 'строк',
                            labelDisplayedRows: ' {from}-{to} показано {count}',
                            firstTooltip: 'В начало',
                            previousTooltip: 'Назад',
                            nextTooltip: 'Вперёд',
                            lastTooltip: 'В конец'
                        },
                        header: {
                            actions: 'Действия'
                        }
                    }}


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

