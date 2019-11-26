import React from 'react';
import {connect} from "react-redux";

import MaterialTable from 'material-table'
import ruMaterialTableLocalization from "../db/MaterialTableLocalizationRu";
import {getDbTableFieldsSC} from "../../redux/dbTablesReducer";


const DbTable = (props) => {

    props.getDbTableFieldsSC('table_s', 1);

    return <div>xxx</div>;
};

const mapStateToProps = (state) => ({
    yo: state.dbTables.yo
});

export default connect(mapStateToProps, {
   getDbTableFieldsSC
})(DbTable);
//export default connect ({}, {getTableListSC})(TableList);

