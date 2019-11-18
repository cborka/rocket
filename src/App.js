import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import TableList from "./components/TableList/TableList";
import * as axios from "axios";
import ButtonX from "./components/ButtonX/ButtonX";

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
        <div className='padding30' >
            "это кнопка"
            <ButtonX
                caption='Hello, world!'
                onClick={onButtonClick}
            />
        </div>
    );
}

export default App;
