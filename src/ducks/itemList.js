export function aitemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function aitemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url){
    return (dispatch) =>{
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) =>{
                if(!response.ok){
                    throw Error(response.status)
                }
                dispatch(itemsIsLoading(false));


                return response;
            })
            .then((response) => response.json())
            .then((items)=> dispatch(itemsFetchDataSuccess(items)))
            .catch(()=> dispatch(itemsHasErrored(true)));
    };
}


export function  itemsHasErrored(state = false, action) {
    switch(action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;

    }
}


export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}

/*Каждый редьюсер будет возвращать отдельное свойство состояния,
не зависимо от того сколько условий в этом редьюсере.
Мне нужно было некоторое время, чтобы это понять. */