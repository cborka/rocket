import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import ButtonX from "./components/ButtonX/ButtonX";
import Header from "./components/Layout/Header";
import TableList from "./components/TableList/TableList"
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Footer from "./components/Layout/Footer";
import {makeStyles} from "@material-ui/core/styles";
import {blue, cyan, deepOrange, grey, indigo, orange, pink, purple, red, teal} from "@material-ui/core/colors";
import {ThemeProvider} from "@material-ui/styles"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import LeftDrawer from "./components/Layout/LeftDrawer";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(theme => ({
    root: {
//        color: teal[900],
        background: grey[50],
        padding: 15
    },
    list: {
        width: 250,
    },
    cont: {
//        height: 250,
    },

}));

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: deepOrange ,
        secondary: purple,
//        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },

});

const onButtonClick = () => {
    axios.get(`http://localhost:3003/`).then((response) => {
        alert(response.data)
    })
};

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className={classes.root}>
               <Header theme={theme} />
                <LeftDrawer />
                <Container height={200} className={classes.cont}>
А тут всё остальное
                <TableList/>
                </Container>
                это была таблица
                <Footer/>
            </Container>
        </ThemeProvider>
    );
}


/*function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" className={classes.root}>
               <Header theme={theme} />
                <LeftDrawer />


                <div className='padding30'>
                    "это кнопка"
                    <ButtonX
                        caption='Hello, world!'
                        onClick={onButtonClick}
                    />

                    <Button
                        variant="outlined"
                        color="primary"
                        /!*                       style={{
                                                   textTransform: 'none'
                                               }}
                       *!/                    >
                        Это тоже кнопка
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Это кнопка secondary
                    </Button>
                    <Button variant="outlined" color='error'>
                        Это кнопка error
                    </Button>

                    {/!* <TableList/>*!/}

                </div>
                <Footer/>
            </Container>
        </ThemeProvider>
    );
}*/

export default App;
