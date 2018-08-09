import api from '../api/fakeApi';
import {ITEMS_REQUEST, ITEMS_SUCCESS, APPLY_FILTER, CHANGE_TAB} from '../constants';

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
// function itemsError(error) {
//     return {
//         type: ITEMS_FAILURE,
//         error: 'Failed to fetch rooms',
//         payload: error,
//     };
// }

export function fetchItems() {
    return (dispatch) => {
        dispatch(fethingItems());
        return api.fetchItems()
            .then((items) => dispatch(itemsSuccess(items)));
    };
}

export function applyFilter(filters) {
    return {
        type: APPLY_FILTER,
        payload: filters,
    };
}

export function changeTab(tab) {
    return {
        type: CHANGE_TAB,
        payload: tab,
    };
}


export function searchItem(query) {
    return (dispatch) => {
        dispatch(fethingItems());
        return api.searchItems(query)
            .then((items) => dispatch(itemsSuccess(items)));
    };
}