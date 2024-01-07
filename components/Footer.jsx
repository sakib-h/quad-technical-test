import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import image2 from "@/public/images/image2.png";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-[#f99f1c] font-dmSans">
            <div className="container">
                {/* web footer */}
                <div className="hidden md:grid">
                    <div className="grid grid-cols-3 py-5 items-center justify-between gap-20">
                        <div className="col-span-2 w-full">
                            <div className="flex flex-col gap-10">
                                <div className="relative w-[80%] bg-[#fefefe] p-5 rounded-lg">
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="w-full h-full outline-none border-none text-[#848484] placeholder:text-[#848484]"
                                    />

                                    <div className="absolute right-5 top-[50%] translate-y-[-50%] font-semibold z-0">
                                        <button className="bg-[#fd6011] flex flex-row items-center gap-2 px-10 py-2 rounded-md text-[#f9d3c1]">
                                            Subscribe
                                            <HiOutlineArrowRight />
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="logo">
                                        <h1 className="text-[1.5rem] font-bold">
                                            pti.
                                        </h1>
                                    </div>
                                    <div className="w-full flex justify-between items-center">
                                        <p className="text-[1rem] font-bold">
                                            Copyright © Tripp. All Right
                                            Reserved
                                        </p>
                                        <div className="social-icons flex flex-row gap-5">
                                            <div className="rounded-full bg-[#feddba] text-[#fd6011]  p-3">
                                                <AiOutlineGoogle className="text-[1.5rem]" />
                                            </div>
                                            <div className="rounded-full bg-[#feddba] text-[#fd6011]  p-3">
                                                <FaTwitter className="text-[1.5rem]" />
                                            </div>
                                            <div className="rounded-full bg-[#feddba] text-[#fd6011]  p-3">
                                                <FaInstagram className="text-[1.5rem]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src={image2}
                                className="w-[80%]"
                                alt="footer-icon"
                            />
                        </div>
                    </div>
                </div>
                {/* mobile footer */}
                <div className="w-full flex flex-col items-center justify-center py-10 gap-10 md:hidden">
                    <div className="relative w-full  bg-[#fefefe] px-4 py-3 rounded-lg">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full h-full outline-none border-none text-[#848484] placeholder:text-[#848484]"
                        />

                        <div className="absolute right-0 top-[50%] translate-y-[-50%] font-semibold">
                            <button className=" flex flex-row items-center gap-2 px-10 py-2 rounded-md text-[#fd6011]">
                                Subscribe
                                <HiOutlineArrowRight />
                            </button>
                        </div>
                    </div>

                    <div className="social-icons flex flex-row gap-5">
                        <div className="rounded-full text-[#feddba] bg-[#fd6011]  p-3">
                            <AiOutlineGoogle className="text-[1.5rem]" />
                        </div>
                        <div className="rounded-full text-[#feddba] bg-[#fd6011]  p-3">
                            <FaTwitter className="text-[1.5rem]" />
                        </div>
                        <div className="rounded-full text-[#feddba] bg-[#fd6011]  p-3">
                            <FaInstagram className="text-[1.5rem]" />
                        </div>
                    </div>

                    <h1 className="text-[1.5rem] font-bold">pti.</h1>
                    <p className="text-[1rem] font-bold">
                        Copyright © Tripp. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
