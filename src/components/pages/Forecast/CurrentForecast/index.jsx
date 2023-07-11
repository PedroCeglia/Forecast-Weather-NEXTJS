import { IntroCurrentForecast, PlaceDataForecast } from "./style"
import CurrentForecastContainer from "./container"

export default function CurrentForecast( {
    placeName = "Rio de Janeiro", 
    data = "09/02/2023 14:00",
    forecastIcon = "/assets/icons/brasil.png", 
    temperatura = "30.7°C", 
    sensacaoTermica = "33.7°C",
    velocidadeDoVento = "3.78 m/s", 
    chancesDeChuva = "38%"
} ) {

    const tabelaList = [
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
            <div>
                {
                    tabelaList.map( ( item, key ) => {
                        return (
                            <div key={ key }>
                                <h3> { item.title } </h3>
                                <span> { item.content } </span>
                            </div>
                        )
                    })
                }

            </div>
        </CurrentForecastContainer>
    )
}