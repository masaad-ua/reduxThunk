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

export function aitemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url){
    return (dispatch) =>{
        dispatch(aitemsIsLoading(true));

        fetch(url)
            .then((response) =>{
                if(!response.ok){
                    throw Error(response.status)
                }
                dispatch(aitemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items)=> dispatch(aitemsFetchDataSuccess(items)))
            .catch(()=> dispatch(aitemsHasErrored(true)));
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


/*По умолчанию создатели действий в Redux не поддерживают асинхронные действия, такие как получение данных,
поэтому мы будем использовать Redux Thunk.
Thunk позволяет нам писать создатели действий, которые возвращают функцию вместо самого действия.
Эта внутренняя функция может в качестве параметров принимать методы хранилища
(store) такие как dispatch и getState,
но мы будем использовать только dispatch.
По настоящему простым примером может быть отправка действия itemsHasErrored() через пять секунд.*/