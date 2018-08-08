import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import items from './items';

const reducer = combineReducers({
    items
});

const selectItemList = (state) => state.items.list;
const selectItemFilters = (state) => state.items.filters;

export const selectNewLisiting = createSelector(selectItemList, (itemList) => itemList.filter(listing => listing.isNew === true));
export const selectSoldLisiting = createSelector(selectItemList, selectItemFilters, (itemList) => itemList.filter(listing => listing.sold === true));
export const selectCurrentLisiting = createSelector(selectItemList, (itemList) => itemList.filter(listing => listing.sold !== true));


export default reducer
