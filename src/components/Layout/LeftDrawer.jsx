import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import {connect} from "react-redux";
import {isLeftDrawerVisibleAC} from "../../redux/appCommonReducer";

const useStyles = makeStyles(theme => ({
    root: {
        width: 250,
    },
}));

const LeftDrawer = (props) => {
    const classes = useStyles();

    const Hey2 = () => {
        props.isLeftDrawerVisibleAC(false)
    };

    return (
        <Drawer
            className={classes.root}
            variant='temporary'
            //           open = 'false'
            open={props.isLeftDrawerVisible}
            onClick={Hey2}
        >
            Hey
            Hey www
        </Drawer>
    )
};

const mapStateToProps = (state) => ({
    isLeftDrawerVisible: state.appCommon.isLeftDrawerVisible
});

export default connect(mapStateToProps, {isLeftDrawerVisibleAC})(LeftDrawer);