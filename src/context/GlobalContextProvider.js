import React, { useReducer, createContext } from "react"

//localStorage

//Reducer
const initialState = {
  theme: window.localStorage.getItem("state")
    ? JSON.parse(window.localStorage.getItem("state"))
    : "light",
}

/* const getState = () => {
  const state = JSON.parse(window.localStorage.getItem("state"))
  console.log(state)
  console.log(initialState)
}

getState() */

//Context

export const GlobalStateContext = createContext(initialState)
export const GlobalDispatchContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      window.localStorage.setItem("state", JSON.stringify(state))

      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      }
    }

    default:
      throw new Error("Error")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
