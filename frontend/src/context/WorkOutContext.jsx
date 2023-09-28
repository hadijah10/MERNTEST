import {createContext,useReducer} from 'react'

export const WorkOutContext = createContext()
export const WorkoutReducer = (state,action) => {
    switch(action.type){
        case 'SETWORKOUTS':
            return {
                workouts:action.payload
            }
        case 'CREATEWORKOUT':
            return {
                workouts:[action.payload,...state.workouts]
            }
        case 'DELETEWORKOUT':
            return{
                workouts:[state.workouts.filter(w=>w._id !== action.payload._id)]
            } 
        default:
            return state
    }
}

export const WorkoutContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(WorkoutReducer,{
        workouts:null
    })
    return (<WorkOutContext.Provider value={{...state,dispatch}}>
        {children}
    </WorkOutContext.Provider>)
}