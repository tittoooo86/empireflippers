import { combineReducers } from 'redux';
import {createSelector} from 'reselect';
import items from './items';

const reducer = combineReducers({
    items
});

const selectItemList = (state) => state.items.list;

export const selectNewLisiting = createSelector(selectItemList, (itemList) => itemList.filter(listing => listing.isNew === true));
export const selectSoldLisiting = createSelector(selectItemList, (itemList) => itemList.filter(listing => listing.sold === true));
export const selectCurrentLisiting = createSelector(selectItemList, (itemList) => itemList.filter(listing => listing.sold !== true));

export const selectFilteredLisiting = (state, filters) => {
    const listings = state.items.list;
    return listings.filter(listing => listing.category === filters)
};

export default reducer
