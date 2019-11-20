import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import ButtonX from "./components/ButtonX/ButtonX";
import MenuAppBar from './components/Header/Header';
import TableList from './components/TableList/TableList'

const onButtonClick = () => {
    axios.get(`http://localhost:3003/`).then((response) => {
        alert(response.data)
    })
};

function App() {
    return (
        <>
            <MenuAppBar/>

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

                <TableList/>

            </div>
        </>
    );
}

export default App;
