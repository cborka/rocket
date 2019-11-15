import React from 'react';
import {connect} from "react-redux";
import {getDbTablesInfoAC, getTableListSC} from "../../redux/dbTablesReduser";


const TableList = (props) => {

    props.getTableListSC();

    return (
      <div>
          TableList {props.yo}
      </div>

    )
};

const mapStateToProps = (state) => ({
    yo: state.dbTables.yo
});

export default connect (mapStateToProps, {getTableListSC})(TableList);
//export default connect ({}, {getTableListSC})(TableList);

