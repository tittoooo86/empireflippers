import { ITEMS_REQUEST, ITEMS_SUCCESS } from '../constants';

const auth = (state = { list:[] }, action) => {
    switch (action.type) {
        case ITEMS_REQUEST:
            return Object.assign({ isFetching: true } ,state);
        case ITEMS_SUCCESS:
            return {
                list: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
};

export default auth;
