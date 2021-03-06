import { useDispatch } from 'react-redux';
import React, { useState} from "react";
import {loginSuccess} from '../../actions/';
import {alertConstants} from '../../constants/alert.constants';
import Form from './Form';
import userData from '../../productData/userData'
const LoginForm=()=>{
   
  const dispatch = useDispatch();
  
  const[err, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

    const handleLogin=(e)=>
    {     console.log(email);
          console.log(password);

        e.preventDefault();
        if ((email===userData().email) && (password ===userData().password)) {
            setError("Login Successfully!");
            setLoading(true);
            dispatch(loginSuccess());
            
         }
        else 
        { 
          setError(alertConstants.ERROR);
        }
    }

    
   
   return(<>

  {loading?"":<Form handleLogin={handleLogin} handleEmail={handleEmail} handlePassword={handlePassword} err={err}/> } 
 
    </>)
}
export default LoginForm