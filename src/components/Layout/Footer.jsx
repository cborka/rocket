import React from 'react';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
    root: {
 //       width: 500,
        background:'navy',
        color: 'white'
    },
});

const Footer = (props) => {
    const classes = useStyles();

    return (
        <div>
            <BottomNavigation
                value='sss'
                 showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} className={classes.root}/>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    )
};

export default Footer;