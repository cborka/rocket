import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import ButtonX from "./components/ButtonX/ButtonX";
import Header from './components/Header/Header';
import TableList from './components/TableList/TableList'
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Footer from "./components/Footer/Footer";
import {makeStyles} from '@material-ui/core/styles';
import {purple} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    root: {
        color: purple[900],
        background: purple[50],
        padding: 50
    }
}));


const onButtonClick = () => {
    axios.get(`http://localhost:3003/`).then((response) => {
        alert(response.data)
    })
};

function App() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root} >

            <Header />



            <div className='padding30'>
                "это кнопка"
                <ButtonX
                    caption='Hello, world!'
                    onClick={onButtonClick}
                />

                <Button
                    variant="outlined"
                    color="primary"
                    style={{
                        textTransform: 'none'
                    }}
                >
                    Это тоже кнопка
                </Button>

             {/* <TableList/>*/}

            </div>

            <Footer />
        </Container>
    );
}

export default App;
