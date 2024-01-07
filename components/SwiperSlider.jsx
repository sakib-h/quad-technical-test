"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MenuCard from "./MenuCard";
import Button from "./Button";
import { useStateContext } from "@/providers/StateProvider";
import Modal from "./Modal";

const SwiperSlider = ({ items, title }) => {
    const { state } = useStateContext();
    console.log(state);
    return (
        <div className="relative">
            <div className="flex justify-between items-center ">
                <h2 className="text-[1.5rem]  font-semibold text-[#0c1b2b] mb-3">
                    {title}
                </h2>
                <Button type="IS_OPEN" />
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <div>
                    {items.map((item) => (
                        <SwiperSlide key={item.Id}>
                            <MenuCard item={item} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>

            {state.isOpen && <Modal />}
        </div>
    );
};

export default SwiperSlider;
