import { WorkOutContext } from "../context/WorkOutContext";
import { useContext } from "react";

export const useWorkoutContext = ()=> {
    const context = useContext(WorkOutContext)
    if(!context){
    throw Error('useworkoutcontext must be used inside workoutprovider')

    }
    return context
}