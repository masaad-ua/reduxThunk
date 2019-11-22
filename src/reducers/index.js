import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading} from "../ducks/itemList";

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});

