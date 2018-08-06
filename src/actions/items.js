import api from '../api/fakeApi';
import { ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE } from '../constants';

function fethingItems() {
    return {
        type: ITEMS_REQUEST,
    };
}
function itemsSuccess(items) {
    return {
        type: ITEMS_SUCCESS,
        payload: items,
    };
}
function itemsError(error) {
    return {
        type: ITEMS_FAILURE,
        error: 'Failed to fetch rooms',
        payload: error,
    };
}

export function fetchItems() {
    return (dispatch) => {
        dispatch(fethingItems());
        return api.fetchItems()
            .then((items) => dispatch(itemsSuccess(items)));
    };
}
