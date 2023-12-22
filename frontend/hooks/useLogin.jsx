import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [success,setSuccess] = useState(null)
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/user/login`,
        { email, password }
      );

      const data = await response.data;

      if (response.status >= 200 && response.status < 300) {
        //save locally
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data });
        setSuccess('Login Successful!')
      } 
      else{
        setSuccess(null)
      }
    } catch (error) {
      console.log("Catched ERROR: ", error.response.data.error);
      setError(error.response.data.error)
    }
  };

  return { login, loading, error, success };
};
