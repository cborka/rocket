import React from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import TableList from "./components/TableList/TableList";
import * as axios from "axios";

const onButtonClick = () => {


    const instance = axios.create({
//        withCredentials: true,
//        baseURL: 'http://127.0.0.1/',
        headers: {
//         'API-KEY': 'c66c6192-39fb-4214-895d-b0ba5142f839'
        }

    });
    instance.get(`http://localhost:3003/`).then((response) => {
    debugger;
        alert(response.data)
    })
//    instance.get(`http://localhost:3003/users`).then(alert('yoyoyoyoyo') ).then((response) => {alert(response)})


};

function App() {
  return (
      <>
      "это кнопка"
      <Button variant="contained" color="primary" onClick={onButtonClick}>
        Hello Space
      </Button>

        </>
  );
}

export default App;
