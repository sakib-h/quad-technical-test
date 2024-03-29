const Hero = () => {
    return (
        <header>
            <div className="container">
                <div className="hidden w-full md:flex bg-[#f99f1c]  px-10 lg:px-20 rounded-xl justify-between gap-5 my-20">
                    <div className="self-center font-dmSans flex flex-col gap-5">
                        <h1 className="text-[#ffefe7] text-[2rem] lg:text-[3rem] font-bold">
                            Deliver Food To Your Doorstep
                        </h1>
                        <p className="text-[#ecd3ae] text-[1rem] lg:text-[1.25rem]">
                            Authentic Food, Quick Service, Fast Delivery
                        </p>
                    </div>
                    <div className="self-end">
                        <img src="/images/image1.png" alt="hero-icon" />
                    </div>
                </div>

                {/* mobile header */}
                <div className="flex flex-col md:hidden w-full justify-between gap-20 my-20 text-center">
                    <div className=" font-dmSans flex flex-col gap-5">
                        <h1 className="text-[#11263c] text-[2rem] lg:text-[3rem] font-bold">
                            Deliver Food To Your Doorstep
                        </h1>
                        <p className="text-[#485869] text-[1rem] lg:text-[1.25rem]">
                            Authentic Food, Quick Service, Fast Delivery
                        </p>
                    </div>
                    <div className="bg-[#fd9460] rounded-xl relative min-h-[200px]">
                        <img
                            src="/images/image1.png"
                            alt="mobile-icon"
                            className="absolute bottom-0"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
