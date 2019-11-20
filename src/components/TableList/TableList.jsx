import React from 'react';
import {connect} from "react-redux";
import {getTableListSC} from "../../redux/dbTablesReducer";


const TableList = (props) => {

    if (props.yo === 1)
        props.getTableListSC();

    return (
        <div>
            TableList {props.yo}
            {
                props.dbTables.map((val) => {
                        return (
                            <div>id={val.tableId}, nm={val.tableName}, label={val.tableLabel}, info={val.tableInfo}</div>
                        )
                    }
                )
            }
        </div>

    )
};

const mapStateToProps = (state) => ({
    yo: state.dbTables.yo,
    dbTables: state.dbTables.dbTables
});

export default connect(mapStateToProps, {getTableListSC})(TableList);
//export default connect ({}, {getTableListSC})(TableList);

