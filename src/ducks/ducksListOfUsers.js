import {Record, Map, OrderedMap} from 'immutable';

let map1 = Map({a: 1, b: 2, c: 3});
let map2 = map1.set('a', 90);


const ReducerState = Record({
    users: new OrderedMap({}),
    loading: false
});

//console.log(map2.get('a'));

export function startDownloadingUsers(){
    return {
        type: 'START_DOWNLOADING'
    }
}

export function getUsers (){
    return {
        type: 'GETTING_USERS',
    }
}

export function finishDownloadingUsers(users){
    return {
        type: 'FINISH_DOWNLOADING',
        payload: {users}
    }
}

export function downloadUsers() {
    return (dispatch) => {
        dispatch({
            type: 'START_DOWNLOADING'
        });

        let xml  = new XMLHttpRequest();
        xml.open('GET', './src/json/data.json');
        xml.onreadystatechange = function () {
            if(xml.readyState < 4 ){
                dispatch({type: 'GETTING_USERS'})
            }
            if(xml.readyState === 4 && xml.status === 200 ){
                console.log(xml.responseText);
                dispatch({type: 'FINISH_DOWNLOADING', payload: xml.response})
            }
        };
        xml.send(null);
    }
}


export default function reducer (state = new ReducerState(), action) {
    const {type, payload} = action;

    switch(type){
        case 'START_DOWNLOADING':
            return state;

        case 'GET_USERS':
            return state;

        case 'FINISH_DOWNLOADING':
            return  state.set('users', payload.users);
        default:
            return state
    }
}