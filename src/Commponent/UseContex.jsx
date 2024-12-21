import React, { Children, createContext, useReducer } from "react";

let initialState = {
  counter: 5,
  counter2: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };

    case "dicrement":
      return { ...state, counter: state.counter - action.value };

    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };

    case "dicrement2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return { ...state, counter: state.counter };
  }
};
const contexData = createContext();

const UseContex = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <contexData.Provider
        value={{ counter: count, counterdispatch: dispatch }}
      >
        {children}
      </contexData.Provider>
    </>
  );
};

export { UseContex, contexData };
