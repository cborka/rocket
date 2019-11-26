import React from 'react';
import {connect} from "react-redux";

import MaterialTable from 'material-table'
import ruMaterialTableLocalization from "../db/MaterialTableLocalizationRu";
import {getDbTableFieldsSC} from "../../redux/dbTablesReducer";


const DbTable = (props) => {

    if (props.yo === 1)
       props.getDbTableFieldsSC('table_s', 0);


//    props.getDbTableFieldsSC('table_s', 0);
    debugger
    return <div>{props.state.dbTables.yo}</div>;
};

const mapStateToProps = (state) => ({
    yo: state.dbTables.yo,
    state: state,
//    columns: state.dbTables.dbTablesArray[0].tableColumns
});

export default connect(mapStateToProps, {
   getDbTableFieldsSC
})(DbTable);
//export default connect ({}, {getTableListSC})(TableList);

