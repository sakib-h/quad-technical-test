import Form from "./Form";

const Modal = () => {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)]">
            <div className="min-h-max h-screen ">
                <div className="relative">
                    <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
