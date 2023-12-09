import { useContext } from "react";
import { WorkoutContext } from "../src/context/WorkoutContext";


export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutContext)

    if(!context)
    {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}