"use client";
import { useStateContext } from "@/providers/StateProvider";
import { MdOutlineCancel } from "react-icons/md";
import ListingForm from "./ListingForm";

const Modal = () => {
    const { state, dispatch } = useStateContext();
    console.log(state);
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)]">
            <div className="w-screen h-screen relative">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[250px] bg-[#eeeff0] rounded-xl Z-1">
                    <button
                        onClick={() =>
                            dispatch({
                                type: "IS_CLOSE",
                            })
                        }
                    >
                        <MdOutlineCancel className="text-[2rem] absolute right-2 top-2 cursor-pointer text-[#0c1b2b]" />
                    </button>

                    <ListingForm />
                </div>
            </div>
        </div>
    );
};

export default Modal;
