import { EstruturaSwiperStyle } from "./style"
import SwiperContent from "./SwiperContent"

export default function EstruturaSwiper( { title = null, type = "", spaceBetween = 50, slidesPerView = "auto", swiperItemList = [] } ) {
    return (
        <EstruturaSwiperStyle>
            { title != null && title }
            <SwiperContent 
                swiperItemList={ swiperItemList } type={ type } 
                spaceBetween={ spaceBetween } slidesPerView={ slidesPerView }
            />
        </EstruturaSwiperStyle>
    )
}