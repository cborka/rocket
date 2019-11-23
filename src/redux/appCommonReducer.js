// Reducer for app common purposes

//import {dbTablesApi} from "../api/api";

const IS_LEFT_DRAWER_VISIBLE = 'IS_LEFT_DRAWER_VISIBLE';

let initialState = {
    isLeftDrawerVisible: false
};

let appCommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LEFT_DRAWER_VISIBLE:
            debugger
            return {
                ...state,
                isLeftDrawerVisible: action.isLeftDrawerVisible
            };
        default:
            return state;
    }
};

export const isLeftDrawerVisibleAC = (isLeftDrawerVisible) => ({
    type: IS_LEFT_DRAWER_VISIBLE, isLeftDrawerVisible
});


export default appCommonReducer;