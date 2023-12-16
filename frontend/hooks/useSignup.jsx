import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import  axios  from 'axios'
export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(null)
    const {dispatch} = useAuthContext();

    const signup = async(email,password) =>{
        setLoading(true)
        setError(null)

        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/user/signup`,{email,password})

        const data = response.data

        if(response.status >= 200 || response.status < 300){
            //save locally
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: "LOGIN", payload: data})
            
            setLoading(false)
        }
        if(!response){
            setLoading(false)
            setError(data.error)
        }
        

    }    

    return { signup, loading, error }
}