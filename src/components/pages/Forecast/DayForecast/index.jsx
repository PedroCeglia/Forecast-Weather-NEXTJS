import EstruturaSwiper from "@/src/components/estruturas/EstruturaSwiper"
import DayForecastContainer from "./container"

export default function DayForecast() {
    const forecastDayList = [
        { hour: "01", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "02", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "03", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "04", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "05", temperature: "30°C", icon: "/assets/icons/brasil.png"},        
        { hour: "06", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "07", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "08", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "09", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "10", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "11", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "12", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "13", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "14", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "15", temperature: "30°C", icon: "/assets/icons/brasil.png"},        
        { hour: "16", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "17", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "18", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "19", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "20", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "21", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "22", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "23", temperature: "30°C", icon: "/assets/icons/brasil.png"},
        { hour: "24", temperature: "30°C", icon: "/assets/icons/brasil.png"},
    ]
    return (
        <DayForecastContainer>
            <h2>Previsões do Dia</h2>
            <EstruturaSwiper type={ "forecast-day" } swiperItemList={ forecastDayList }/>
        </DayForecastContainer>
    )
}