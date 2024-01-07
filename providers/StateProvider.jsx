"use client";
import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();
const initialState = {
    isOpen: false,
};

const stateReducer = (state, action) => {
    switch (action.type) {
        case "IS_OPEN":
            return {
                ...state,
                isOpen: true,
            };
        case "IS_CLOSE":
            return {
                ...state,
                isOpen: false,
            };
        default:
            return state;
    }
};

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    return useContext(StateContext);
};

export default StateProvider;
