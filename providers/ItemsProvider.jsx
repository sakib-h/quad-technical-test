"use client";
import { createContext, useReducer, useContext } from "react";

export const ItemsContext = createContext();
const initialState = {
    items: [],
};

const itemsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEMS":
            return {
                ...state,
                items: [...state.items, action.payload],
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
