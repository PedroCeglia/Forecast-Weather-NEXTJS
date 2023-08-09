import WeekForecastContainer from "./container";
import { ListWeekForecast } from "./style";
import ItemForecastWeek from "@/src/components/itens/ItemForecastWeek";

export default function WeekForecast() {
    
    const weekForecastList = [
        { day: "01", temperature: "30°C", icon:"/assets/icons/brasil.png" },
        { day: "02", temperature: "30°C", icon:"/assets/icons/brasil.png" },
        { day: "03", temperature: "30°C", icon:"/assets/icons/brasil.png" },
        { day: "04", temperature: "30°C", icon:"/assets/icons/brasil.png" },
        { day: "05", temperature: "30°C", icon:"/assets/icons/brasil.png" },
        { day: "06", temperature: "30°C", icon:"/assets/icons/brasil.png" },
        { day: "07", temperature: "30°C", icon:"/assets/icons/brasil.png" },
    ]

    return (
        <WeekForecastContainer>
            <h2>Previsões da Semana</h2>
            <ListWeekForecast>
                { 
                    weekForecastList.map( ( item, key ) => {
                        return (
                            <ItemForecastWeek item={ item } key={ key } />
                        )
                    } )
                }
            </ListWeekForecast>
        </WeekForecastContainer>
    )
}