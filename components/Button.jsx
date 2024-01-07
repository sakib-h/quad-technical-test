"use client";

import { useStateContext } from "@/providers/StateProvider";

const Button = ({ type }) => {
    const { state, dispatch } = useStateContext();

    return (
        <button
            className="text-[1rem] text-[#fd6011] "
            onClick={() => dispatch({ type: type })}
        >
            Add More
        </button>
    );
};

export default Button;
