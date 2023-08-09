'use client'

import { SwiperContainerStyle, SwiperSlideContentStyle } from "./style"
import { Pagination } from "swiper/modules"
import ItemForecastDay from "@/src/components/itens/ItemForecastDay";
import { useThemeProvider } from "@/src/style/ThemeProvider";


export default function SwiperContent( { type, swiperItemList = [], direction = "horizontal", slidesPerView = "auto" } ) {
    
    const swiperModulesList = [ Pagination ]

    const { theme } = useThemeProvider()

    return(
        <SwiperContainerStyle
            modules={ swiperModulesList } theme={ theme } 
            pagination={ { clickable: true } } direction={ direction }
            grabCursor={ true } centeredSlides={ false }
            slidesPerView={ slidesPerView } spaceBetween={ 0 }   
        >
            {
                swiperItemList.map( ( item, key ) => {
                    const isthefirst = key !== 0
                    return (
                        <SwiperSlideContentStyle key={ key } >
                           { type === "forecast-day"  && <ItemForecastDay item={ item } theme={ theme } isTheFirst={ isthefirst ? 1 : 0 } /> } 
                           { type === "forecast-week"  && <ItemForecastDay item={ item } theme={ theme } /> } 
                        </SwiperSlideContentStyle>  
                    )
                })
            }
        </SwiperContainerStyle>
    )
}