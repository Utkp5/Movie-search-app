import React, { createContext } from 'react'


//create provider consumer  this is our parent 
const AppContext = createContext();

const AppProvider = ({children}) => {

    return <AppContext.Provider value={"utkarsh"}>{children}</AppContext.Provider>
}


export {AppContext,AppProvider};