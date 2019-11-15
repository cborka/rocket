import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1/',
    headers: {
//        'API-KEY': 'c66c6192-39fb-4214-895d-b0ba5142f839'
    }

});

export const dbTablesApi = {
    getTablesList() {
        debugger
        return instance.get(`docs/get_tables_json`)

//            .then(alert('hey'))
//            {}).then(
//        debugger;
//        (response => response.data));
    },
    getTablesList2() {
        console.log('YOYO');
        return 'YOYO'
    }

};
