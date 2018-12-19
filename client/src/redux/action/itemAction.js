import axios from 'axios';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../action/types';


//static method of geting items form our static list
// export const getItems = () =>{
//     return{
//         type: GET_ITEMS
//     };
// };

//Geting item from the database
export const getItems = () => dispatch =>{
    dispatch(setItemsLoading());
    axios.get('/api/items').then(res =>{
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    })
    return{
        type: GET_ITEMS
    };
};

// export const deleteItem = (id) =>{
//     return{
//         type: DELETE_ITEM,
//         payload: id
//     };
// };

export const deleteItem = (id) => dispatch =>{
    axios.delete(`api/items/${id}`).then(res =>{
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    })
};

// export const addItem = (item) =>{
//     return{
//         type: ADD_ITEM,
//         payload: item
//     };
// }

export const addItem = (item)=> dispatch =>{
    dispatch(setItemsLoading());
    axios.post('/api/items', item).then(res =>{
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    })
    return{
        type: GET_ITEMS
    };
}

export const setItemsLoading = () =>{
    return{
        type: ITEMS_LOADING
    }
}

