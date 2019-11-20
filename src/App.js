import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import ButtonX from "./components/ButtonX/ButtonX";
import MenuAppBar from './components/Header/Header';

const onButtonClick = () => {


    const instance = axios.create({
//        withCredentials: true,
//        baseURL: 'http://127.0.0.1/',
        headers: {
//         'API-KEY': 'c66c6192-39fb-4214-895d-b0ba5142f839'
        }

    });
    instance.get(`http://localhost:3003/`).then((response) => {
//    instance.get(`http://x321.ru:3003/`).then((response) => {

        alert(response.data)
    })
//    instance.get(`http://localhost:3003/users`).then(alert('yoyoyoyoyo') ).then((response) => {alert(response)})


};

function App() {
    return (
        <>
        <MenuAppBar />
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

        </div>
            </>
    );
}

export default App;
