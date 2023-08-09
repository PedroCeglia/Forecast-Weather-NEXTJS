import { IntroCurrentForecast, PlaceDataForecast } from "./style"
import CurrentForecastContainer from "./container"
import TableCurrentForecast from "./TableCurrentForecast"

export default function CurrentForecast( {
    placeName = "Rio de Janeiro", 
    data = "09/02/2023 14:00",
    forecastIcon = "/assets/icons/brasil.png", 
    temperatura = "30.7°C", 
    sensacaoTermica = "33.7°C",
    velocidadeDoVento = "3.78 m/s", 
    chancesDeChuva = "38%"
} ) {

    const tableList = [
        { title: "Temperatura", content: temperatura },
        { title: "Sensação Termica", content: sensacaoTermica },
        { title: "Velocidade do Vento", content: velocidadeDoVento },
        { title: "Chances de Chuva", content: chancesDeChuva },
    ]
    
    return (
        <CurrentForecastContainer>
            <IntroCurrentForecast>
                <PlaceDataForecast>
                    <h2> { placeName } </h2>
                    <span> { data } </span>
                </PlaceDataForecast>
                <img src={ forecastIcon } alt={ "Forecast Icon" }/>
            </IntroCurrentForecast>
            <TableCurrentForecast tableList={ tableList } />
        </CurrentForecastContainer>
    )
}