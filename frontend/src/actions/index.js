import { GET_DATA,POST_DATA,CLEAR_ALL } from '../constants';

export const getData = () => {
    const action = { type: GET_DATA }
    console.log('action in getData',action);
    return action;
}

export const postData = (name,age) => {
    const action = { 
        type: POST_DATA,
        payload: { name: name, age:age }
    }
    console.log('action in postData',action);
    return action;
}

export const clearAll = () => {
    const action = {
        type:CLEAR_ALL 
    }
    return action;
}