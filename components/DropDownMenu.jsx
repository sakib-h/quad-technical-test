"use client";
import React, { useState } from "react";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const DropdownMenu = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="bg-[#fefefe] text-[#11263c] font-dmSans font-bold py-2 px-4 flex justify-center items-center rounded gap-3"
            >
                <span>MENU</span>
                {isDropdownOpen ? (
                    <MdOutlineKeyboardArrowUp className="text-2xl" />
                ) : (
                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                )}
            </button>
            {isDropdownOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-48 py-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onBlur={closeDropdown}
                    tabIndex={0}
                >
                    <p className="dropdown-menu-item">Home</p>
                    <p className="dropdown-menu-item">Details</p>
                    <p className="dropdown-menu-item">Category</p>
                    <p className="dropdown-menu-item">My Favorites</p>
                    <p className="dropdown-menu-item">Profile</p>
                    <p className="dropdown-menu-item">Log In/Sign Up</p>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
