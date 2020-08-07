import React, { createContext, useContext, useReducer } from "react";

export const StateProviderContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  <StateProviderContext value={useReducer(reducer, initialState)}>
    {children}
  </StateProviderContext>;
};
