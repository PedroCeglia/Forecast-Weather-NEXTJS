import { 
    CurrentForecast, 
    DayForecast, 
    ForecastPageStyle, 
    CurrentAndDayForecastStyle,
    WeekForecast 
} from "@/src/components/pages/Forecast"


export default function ForecastPage() {
    return (
        <ForecastPageStyle>
            <CurrentAndDayForecastStyle>
                <CurrentForecast/>
                <DayForecast/>
            </CurrentAndDayForecastStyle>
            <WeekForecast/>
        </ForecastPageStyle>
    )
}