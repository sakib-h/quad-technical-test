"use client";
import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();
const initialState = {
    isOpen: false,
    data: [],
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
        case "ADD_ITEMS":
            return {
                ...state,
                data: [...state.data, action.payload],
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
