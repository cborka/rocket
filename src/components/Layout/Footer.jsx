import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles(theme => {
    return ({
        root: {
            //background: theme.palette.background.paper,
//            background: theme.palette.primary[500],
            color: theme.palette.secondary[700],
        }
    })
});
const Footer = (props) => {
    const classes = useStyles();

    return (
            <BottomNavigation
                value='1'
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon/>} className={classes.root}/>
                {/*<BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>} className={classes.root}/>*/}
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>} className={classes.root}/>
            </BottomNavigation>
    )
};

export default Footer;