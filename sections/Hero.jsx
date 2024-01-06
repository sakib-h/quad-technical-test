import Image from "next/image";
import image1 from "@/public/images/image1.png";

const Hero = () => {
    return (
        <header>
            <div className="container">
                <div className="hidden w-full md:flex bg-[#f99f1c]  px-10 lg:px-20 rounded-xl relative justify-between gap-10">
                    <div className="self-center col-span-7">
                        <h1>Deliver Food To Your Doorstep</h1>
                        <p>Authentic Food, Quick Service, Fast Delivery</p>
                    </div>
                    <div className="col-span-5 self-end">
                        <Image src={image1} quality={100} placeholder="blur" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
