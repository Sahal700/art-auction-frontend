import React, { createContext, useState } from 'react'
export const modeCotext = createContext({})
function Contextshare({children}) {
  const [mode,setMode] = useState('light')
  return (
    <modeCotext.Provider value={{mode,setMode}}>
      {children}
    </modeCotext.Provider>
  )
}

export default Contextshare