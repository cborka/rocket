import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {cyan, deepPurple} from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
    root: {
       flexGrow: 2,
       padding: 0,
        background: cyan[300]
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    back: {
        background: cyan[500]
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static"  className={classes.back} >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Ракета
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}