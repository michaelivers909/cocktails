import React from "react";

export const initialState = {
  saved: [],
  query: [],
  user: {
    username: "",
    id: null,
    role: "",
  },
};

export const DrinkContext = React.createContext(null);
