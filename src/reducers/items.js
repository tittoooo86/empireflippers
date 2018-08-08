import {APPLY_FILTER, CHANGE_TAB, ITEMS_REQUEST, ITEMS_SUCCESS} from '../constants';

const auth = (state = { list:[], filters:['all'], activeTab: 1 }, action) => {
    switch (action.type) {
        case ITEMS_REQUEST:
            return Object.assign({ isFetching: true } ,state);
        case ITEMS_SUCCESS:
            return {
                list: action.payload,
                filters: state.filters,
                isFetching: false
            };
        case APPLY_FILTER:
            return {
                list: state.list,
                filters: action.payload
            };
        case CHANGE_TAB:
            return {
                list: state.list,
                filters: state.filters,
                activeTab: action.payload
            };
        default:
            return state;
    }
};

export default auth;
