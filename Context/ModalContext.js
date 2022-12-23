import React from 'react'
import { createContext, useState } from 'react'

export const ModalContext = createContext(null);

export const ModalContextProvider=({children})=>{
 const[modal, setModal] = useState(false)

 const showModal=()=>{
    setModal(true)
 }

 const hideModal=()=>{
    setModal(false)
 }
    return(
        <ModalContext.Provider value={{modal, showModal, hideModal}}>
            {children}
        </ModalContext.Provider>
    )
}