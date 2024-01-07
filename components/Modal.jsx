import { useStateContext } from "@/providers/StateProvider";

const Modal = () => {
    const { state, dispatch } = useStateContext;
    console.log(state);
    return (
        <div className="">
            <button
                onCLick={() =>
                    dispatch({
                        type: "IS_CLOSE",
                    })
                }
            >
                Close
            </button>
        </div>
    );
};

export default Modal;
