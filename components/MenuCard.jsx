const MenuCard = ({ item }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 cursor-pointer">
            <div className="w-full h-[150px]  sm:h-[180px]  md:h-[200px] lg:h-[300px]">
                <img
                    src={item.ImageUrl}
                    className="h-full object-cover object-center rounded-lg shadow-md"
                />
            </div>
            <h4 className="font-dmSans text-[1rem] lg:text=[1.25rem] text-[#0c1b2b]">
                {item.Name}
            </h4>
        </div>
    );
};

export default MenuCard;
