import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {cyan, deepPurple} from "@material-ui/core/colors";
import {connect} from "react-redux";
import {isLeftDrawerVisibleAC} from "../../../redux/appCommonReducer";
import MainMenu from "./MainMenu/MainMenu";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 2,
        padding: 0,
        paddingBottom: 0,

//        background: cyan[100]
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.secondary[500]

    },
    title: {
        flexGrow: 1,
    },
    back: {
//        height: 30
//        background: 'orange'
//        backgroundColor: theme.palette.secondary
        background: theme.palette.background.paper,
        color: theme.palette.primary[500],
//        color: theme.palette.text.secondary,
    }
}));


const Header = (props) => {

    const classes = useStyles();

    const Hey = () => {
// LeftDrawer.open = 'true'
        props.isLeftDrawerVisibleAC(true)
    };
    const HeyYou = () => {
        alert('HeyYou')
    };

    return (
        <div className={classes.root}>
             <AppBar elevation={0} position="static" className={classes.back}>
                <Toolbar className={classes.back} disableGutters={false} variant='dense'>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="menu"
                        onClick={Hey}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        Ракета
                    </Typography>
                    <MainMenu color = 'textPrimary' variant="body2" />
                </Toolbar>
                 <Divider />
            </AppBar>

        </div>
    );
};


const mapStateToProps = (state) => ({
    isLeftDrawerVisible: state.appCommon.isLeftDrawerVisible
});

export default connect(mapStateToProps, {isLeftDrawerVisibleAC})(Header);