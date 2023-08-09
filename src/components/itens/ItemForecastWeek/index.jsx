'use client'
import { useThemeProvider } from "@/src/style/ThemeProvider";
import { 
    ItemForecastWeekStyle, ItemForecastWeekTableRow, ItemForecastWeekTableHeader 
} from "./style";
 
export default function ItemForecastWeek( { item } ) {

    const { theme } = useThemeProvider()

    return (
        <ItemForecastWeekStyle theme={ theme }>
            <ItemForecastWeekTableRow>
                <ItemForecastWeekTableHeader> Dia </ItemForecastWeekTableHeader>
                <span> { item.day } </span>
            </ItemForecastWeekTableRow>
            <ItemForecastWeekTableRow>
                <ItemForecastWeekTableHeader> Previsão do Dia </ItemForecastWeekTableHeader>
                <img src={ item.icon } alt={`icon ${ item.hour }`} />
            </ItemForecastWeekTableRow>
            <ItemForecastWeekTableRow>
                <ItemForecastWeekTableHeader> Temperatura </ItemForecastWeekTableHeader>
                <span> { item.temperature } </span>
            </ItemForecastWeekTableRow>
        </ItemForecastWeekStyle>
    )
}