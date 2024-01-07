import SwiperSlider from "@/components/SwiperSlider";
import fetchData from "@/lib/fetchData";

const Menu = async () => {
    const { Items } = await fetchData();
    const popularItems = Items.filter((item) => item.IsPopular);
    const recommendedItems = Items.filter((item) => item.IsRecommended);
    return (
        <div className="container pb-20">
            <div className="font-dmSans mb-20">
                <SwiperSlider items={popularItems} title="Popular" />
            </div>

            <div>
                <SwiperSlider items={recommendedItems} title="Recommended" />
            </div>
        </div>
    );
};

export default Menu;
