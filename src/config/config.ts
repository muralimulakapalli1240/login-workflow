import React from "react";

export const initialState = {
  store: {},
  dispatch: () => {}
};

export const Context = React.createContext(initialState);