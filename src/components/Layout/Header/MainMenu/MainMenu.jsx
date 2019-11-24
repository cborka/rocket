import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(3),
            color: theme.palette.text.primary[900]

        },
    },
}));

const MainMenu = (props) => {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();

    return (
        <Typography className={classes.root}>
            <Link href="#" onClick={preventDefault} >
                Система
            </Link>
            <Link href="#" onClick={preventDefault} color = 'textPrimary'>
                База
            </Link>
            <Link href="#" onClick={preventDefault} color = 'textPrimary'>
                Документы
            </Link>
            <Link href="#" onClick={preventDefault} color = 'textPrimary'>
                План
            </Link>
            <Link href="#" onClick={preventDefault} color = 'textPrimary'>
                Помощь
            </Link>
            <Link href="#" onClick={preventDefault} color = 'textPrimary'>
                О программе
            </Link>


        </Typography>


    )
};

export default MainMenu;