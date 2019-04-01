import {REGISTER,LOGIN} from './types';


// Register User
export const registerUser =(userData) =>{
    return{
        type: REGISTER,
        payload: userData
    };
};

// export const loginUser=(userCreds)=>{
//     return {
//         type:LOGIN,
//         payload:userCreds
//     }
// }