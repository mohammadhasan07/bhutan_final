import {REGISTER,LOGIN} from '../actions/types';
import axios from 'axios';

// const initialState = {
//     isAuthenticated: false,
//     user: {}


export const authReducer=(state = {}, action)=>{
    console.log(action)
    switch(action.type){
        case "REGISTER":

            axios.post('api/users/register', action.payload)
                .then(res =>{
                    if(res.status===200){
                        return{
                            ...state,
                            isAuthenticated:true
                        }
                    }
                })
                .catch(err =>console.log(err));
                // return state;
                return{
                    ...state,
                    isAuthenticated:true
                }
                break;
        case "LOGIN":
        console.log('here')
        axios.post('api/users/login', action.payload)
            .then(res =>{ return{
                ...state,
                isAuthenticated:true
            }
            action.historyprops.push('/')
        })
            
            .catch(err =>console.log(err));
            return{
                ...state,
                isAuthenticated:true
            }
            
            break;
        default: 
            return state;
    }
}