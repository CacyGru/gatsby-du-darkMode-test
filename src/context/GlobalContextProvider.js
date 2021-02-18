import React, { useReducer, createContext, useEffect } from "react"
import storage from "local-storage-fallback"

//Reducer

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "dark" ? "light" : "dark",
      }

    default:
      return state.theme
  }
}

const initialState = {
  theme: storage.getItem("theme") ? storage.getItem("theme") : "dark",
}

//Context
export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    return storage.setItem("theme", state.theme)
  }, [state])

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
