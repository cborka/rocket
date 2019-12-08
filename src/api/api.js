import * as axios from "axios";


const instance = axios.create({
//    withCredentials: true,
    baseURL: `http://x321.ru:3003/`,
//    baseURL: `http://localhost:3003/`,
    headers: {
//        'API-KEY': 'c66c6192-39fb-4214-895d-b0ba5142f839'
    }

});

export const dbTablesApi = {
    getTablesList() {
        debugger
        return instance.get(`get_table_list`)
/*
            .then(
            response => {
                debugger
                return response.data
            })
            .catch(function (error) {
                debugger
                console.log(error);
            })
*/

//            .then(alert('hey'))
//            {}).then(
//        debugger;
//        (response => response.data));
    },

    getDbTableFields(tableName) {
        debugger
        return instance.get(`db/get_table_fields/`+tableName)
    },

    getTablesList2() {
        console.log('YOYO');
        return 'YOYO'
    }

};
