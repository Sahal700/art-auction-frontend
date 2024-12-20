import React, { createContext, useEffect, useState } from 'react'
export const modeCotext = createContext({}) /* ligt or dark mode */
export const roleContext = createContext({}) /* for role user or admin */
export const loginResponseContext = createContext({}) /* to check whether loged in or not */
export const addResponseContext = createContext({})
export const editResponseContext = createContext({})
export const updateProfileResponseContext = createContext({})
function Contextshare({children}) {
  const [mode,setMode] = useState('light')
  const [role,setRole] = useState('user')
  const [loginResponse,setLoginResponse] = useState(false)
  const [addResponse,setAddResponse] = useState({})
  const [editResponse,setEditResponse] = useState({})
  const [updateProfileResponse,setUpdateProfileResponse] = useState({})
  useEffect(()=>{
    if (sessionStorage.getItem('token')) {
      setLoginResponse(true)
    }
  },[])
  return (
    <modeCotext.Provider value={{mode,setMode}}>
      <roleContext.Provider value={{role,setRole}}>
        <loginResponseContext.Provider value={{loginResponse,setLoginResponse}}>
          <addResponseContext.Provider value={{addResponse,setAddResponse}}>
            <editResponseContext.Provider value={{editResponse,setEditResponse}}>
              <updateProfileResponseContext.Provider value={{updateProfileResponse,setUpdateProfileResponse}}>
                {children}
              </updateProfileResponseContext.Provider>
            </editResponseContext.Provider>
          </addResponseContext.Provider>
        </loginResponseContext.Provider>
      </roleContext.Provider>
    </modeCotext.Provider>
  )
}

export default Contextshare