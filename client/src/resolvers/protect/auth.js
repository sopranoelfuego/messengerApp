import React,{useContext,createContext,useReducer} from 'react'
import {LOGIN,LOGOUT}from './types.js'

const AuthStateContext=createContext()
const AuthDispatchContext=createContext()



const authReducer=(state,action)=>{

    switch(action.types){
      case LOGIN :
          return {...state,user:action.payload}
      case LOGOUT: return {...state,user:null} 
      default :return state
    }


}

export const AuthProvider=({children})=>{


    const [state,dispatch]=useReducer(authReducer,{user:null})

    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                    {children}
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
}

export const useAuthState=()=>useContext(AuthStateContext)
export const useAuthDispatch=()=>useContext(AuthDispatchContext)