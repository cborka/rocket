import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {connect} from "react-redux";
import {isLeftDrawerVisibleAC} from "../../../../redux/appCommonReducer";

const useStyles = makeStyles(theme => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(1),
            color: theme.palette.text.primary[900]
        },
    },
    menuButton: {
        marginRight: theme.spacing(0),
        color: theme.palette.secondary[500]
    },
}));


const MainMenu = (props) => {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();

    const Hey = () => {
        props.isLeftDrawerVisibleAC(true)
    };

    return (
        <Typography className={classes.root}>

            <Link href="http://x321.ru" target="_blank" rel="noopener" {...props} >
                Система
            </Link>
            <Link href="/TableList" {...props} >
                База
            </Link>
            <Link href="#" onClick={preventDefault} {...props} >
                Документы
            </Link>
            <Link href="#" onClick={preventDefault} {...props} >
                План
            </Link>
            <Link href="/About" {...props} >
                О программе
            </Link>


        </Typography>


    )
};

const mapStateToProps = (state) => ({
    isLeftDrawerVisible: state.appCommon.isLeftDrawerVisible
});

export default connect(mapStateToProps, {isLeftDrawerVisibleAC})(MainMenu);
//export default MainMenu;