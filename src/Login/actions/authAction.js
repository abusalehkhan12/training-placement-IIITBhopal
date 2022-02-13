import axios from "axios";
import setAuthToken from '../utilities/setAuthToken';
import jwt_decode from "jwt-decode";
import {GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from './type';



//Login
export const login = userdata => dispatch =>{
    console.log(userdata)
    axios.post("https://reqres.in/api/login", userdata)
    .catch(err=>dispatch({
        type:GET_ERRORS, 
        payload: err.reponse.data
    }
    ) 
    )
    .then(res =>{
                    if(res != undefined  && res.data){
                   const {token} =res.data;
                   
                   localStorage.setItem("jwtToken", token);
                   setAuthToken(token);
                   
                //const decoded= jwt_decode(token);
                  //console.log(decoded)
                   dispatch(setcurrentuser(userdata));
                    }
                }
        )
    
};

export const setcurrentuser = decoded =>{
    
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const userloading =()=>{
    return{
      //  type: USER_LOADING
    }
}
//logout

export const logout= () => dispatch =>{
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setcurrentuser({}));
};