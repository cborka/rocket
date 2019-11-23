import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {cyan, deepPurple} from "@material-ui/core/colors";
import {connect} from "react-redux";
import {isLeftDrawerVisibleAC} from "../../redux/appCommonReducer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 2,
        padding: 0,

//        background: cyan[100]
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    back: {
//        height: 30
//        background: 'orange'
//        backgroundColor: theme.palette.secondary
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
            <AppBar position="static" className={classes.back}>
                <Toolbar className={classes.back} disableGutters={false} variant='dense'>

                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={Hey}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Tabs className={classes.back}
                          value='one'
                        //                      onChange={HeyYou}
                           className={classes.back}
                    >
                        <Tab label="Item One" onClick={() => {
                            alert('HeyYou 111')
                        }}/>
                        <Tab label="Item Two"/>
                        <Tab className={classes.back} label="Item Three"/>
                    </Tabs>


                    <Typography variant="h6" className={classes.title}>
                        Ракета
                    </Typography>
                </Toolbar>

            </AppBar>

        </div>
    );
};


const mapStateToProps = (state) => ({
    isLeftDrawerVisible: state.appCommon.isLeftDrawerVisible
});

export default connect(mapStateToProps, {isLeftDrawerVisibleAC})(Header);