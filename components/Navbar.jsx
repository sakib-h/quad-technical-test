import { AiOutlineUser } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import DropdownMenu from "./DropDownMenu";

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className="flex justify-between items-center gap-5 md:gap-10 py-4 md:pt-10">
                    <div className="logo">
                        <h1 className="text-[1.5rem] font-bold">pti.</h1>
                    </div>
                    <div className="search-bar flex-grow ">
                        <div className="flex flex-row gap-3">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search Audio book"
                                    className="w-full px-10 py-2 rounded-lg outline-none border-none bg-[#fefefe] text-[#848484] placeholder:text-[#848484] font-dmSans"
                                />
                                <RiSearchLine className="absolute left-0 top-[50%] translate-y-[-50%] text-[1.5rem] text-[#fd6011] ml-2" />
                            </div>
                            <div>
                                <DropdownMenu />
                            </div>
                        </div>
                    </div>
                    <div className="search-bar hidden md:inline-block bg-[#fd6011] p-2 rounded-full">
                        <AiOutlineUser className="text-[1.5rem] text-[#fefefe]" />
                    </div>
                </div>
            </div>
            <hr className="w-full border-[1px] border-[#8484841a] md:hidden" />
        </nav>
    );
};

export default Navbar;
