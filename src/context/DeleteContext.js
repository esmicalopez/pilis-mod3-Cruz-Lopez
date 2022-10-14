import { createContext, useState, } from "react"

export const DeleteContext = createContext({
    borrar: [],
    setDelete: () => {}
})

export const BorrarProvider = ({ children }) =>{
    const [borrar, setDelete] = useState([]);
    const value = {borrar, setDelete};
    
    return <DeleteContext.Provider value={value}>{children}</DeleteContext.Provider>
}
