import React from "react";
import "./App.css";
import * as axios from "axios";
import Header from "./components/Layout/Header/Header";
import Container from "@material-ui/core/Container";
import Footer from "./components/Layout/Footer";
import {makeStyles} from "@material-ui/core/styles";
import {deepOrange, deepPurple, grey} from "@material-ui/core/colors";
import {ThemeProvider} from "@material-ui/styles"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import LeftDrawer from "./components/Layout/LeftDrawer";
import {Route} from "react-router-dom";
import About from "./components/Layout/About";
import TableList from "./components/TableList/TableList";

const useStyles = makeStyles(theme => ({
    root: {
//        color: teal[900],
        background: grey[50],
        padding: 0,
        paddingLeft: 5,
        paddingRight: 5,

    },
    list: {
        width: 2500,
    },
    cont: {
        padding: 0,
        paddingLeft: 15,
        paddingRight: 15,
//        paddingTop: 20,
//        paddingBottom: 20
//        height: 250,
    },

}));

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: deepPurple,
        secondary: deepOrange,
//        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    boxShadow: 'none',
    shadows: ["none"],

//    appBarShadow: 'none'

});

const onButtonClick = () => {
    axios.get(`http://localhost:3003/`).then((response) => {
        alert(response.data)
    })
};

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme} >
            <Container maxWidth="false" className={classes.root}>

{/*                <MainMenu color = 'textPrimary' variant="body2" />*/}
                <Header theme={theme}/>
                <LeftDrawer/>

                <Container  maxWidth="false" className={classes.cont}>
                    {/*<Route path='/' component={About}/>*/}
                    <Route path='/About' component={About}/>
                    <Route path='/TableList' render={() => <TableList  />}/>

{/*                    <Route path='/' component={Header}/>*/}

                    {/*<TableList />*/}
                   {/* <DbTable />*/}
                </Container>


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
