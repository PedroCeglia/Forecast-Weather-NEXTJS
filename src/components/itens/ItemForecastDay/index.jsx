'use client'

import { ItemForecastDayStyle } from "./style"

export default function ItemForecastDay( { item, theme, isTheFirst } ) {
    
    return (
        <ItemForecastDayStyle theme={ theme } isthefirst={ isTheFirst }>
            <h4> { item.hour } h </h4>
            <img src={ item.icon } alt={`icon ${ item.hour }`} />
            <span> { item.temperature } </span>
        </ItemForecastDayStyle>
    )
}