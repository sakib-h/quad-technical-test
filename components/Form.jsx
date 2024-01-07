"use client";
import React, { useState } from "react";
import { useStateContext } from "@/providers/StateProvider";
import { MdOutlineCancel } from "react-icons/md";
const Form = () => {
    const { state, dispatch } = useStateContext();

    const [formData, setFormData] = useState({
        Name: "",
        price: "",
        ImageUrl: "",
        isPopular: false,
        isRecommended: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.Name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.price.trim() || isNaN(formData.price)) {
            newErrors.price = "Price must be a number";
        }

        if (!formData.ImageUrl.trim()) {
            newErrors.imageUrl = "Image URL is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isFormValidate = validateForm();
        if (isFormValidate) {
            dispatch({
                type: "ADD_ITEMS",
                payload: {
                    ...formData,
                },
            });
            dispatch({
                type: "IS_CLOSE",
            });
        }
    };

    return (
        <form
            className="max-w-md mx-auto font-dmSans bg-white p-8 shadow-md rounded-md mt-10 relative"
            onSubmit={handleSubmit}
        >
            <div className="mb-4 relative">
                <label className="text-gray-700 text-sm font-bold mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.name && (
                    <span className="absolute bottom-0 left-0 text-red-500">
                        {errors.name}
                    </span>
                )}
            </div>

            <div className="mb-4 relative">
                <label className="text-gray-700 text-sm font-bold mb-2">
                    Price:
                </label>
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.price && (
                    <span className="absolute bottom-0 left-0 text-red-500">
                        {errors.price}
                    </span>
                )}
            </div>

            <div className="mb-4">
                <label className="text-gray-700 text-sm font-bold mb-2">
                    Image URL:
                </label>
                <input
                    type="text"
                    name="ImageUrl"
                    value={formData.ImageUrl}
                    onChange={handleChange}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.imageUrl && (
                    <span className="text-red-500">{errors.imageUrl}</span>
                )}
            </div>

            <div className="mb-4">
                <label className="text-gray-700 text-sm font-bold mb-2">
                    Is Popular:
                </label>
                <input
                    type="checkbox"
                    name="isPopular"
                    checked={formData.isPopular}
                    onChange={handleChange}
                    className="mr-2"
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-700 text-sm font-bold mb-2">
                    Is Recommended:
                </label>
                <input
                    type="checkbox"
                    name="isRecommended"
                    checked={formData.isRecommended}
                    onChange={handleChange}
                    className="mr-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: "IS_CLOSE",
                    })
                }
                className="absolute right-2 top-2"
            >
                <MdOutlineCancel className=" text-[2rem] cursor-pointer text-[#0c1b2b]" />
            </button>
        </form>
    );
};

export default Form;
