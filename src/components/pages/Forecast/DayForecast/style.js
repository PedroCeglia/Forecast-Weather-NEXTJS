'use client'

import styled from "styled-components"

export const ArticleDayForecast = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${ ( { theme } ) => theme.articleForecastColor };

    width: 55vw;
    margin-left: 10px;
    border-radius: 15px;
    padding: 10px 0 40px;

    @media all and ( max-width : 800px ) {
        width: 90vw;
        margin-left: 0;
    }

    h2 {
        font-size: 1.8em;
        margin: 20px 0;
    }

    overflow-x: auto;

    /* Estilizando a trilha da barra de rolagem */
    &::-webkit-scrollbar {
    width: 10px; /* Largura da trilha da barra de rolagem */
    bottom: -60px; /* Mover a barra de rolagem 20px para a direita */
    }

    /* Estilizando o polegar (handle) da barra de rolagem */
    &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do polegar da barra de rolagem */
    border-radius: 5px; /* Bordas arredondadas do polegar */
    }

    /* Estilizando o polegar ao passar o mouse (opcional) */
    &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor do polegar ao passar o mouse */
    }
`

export const DayForecastListContainer = styled.div`
    width: 95%;
    min-width: 280px;
    max-width: 1200px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    overflow-x: auto;

    border-radius: 20px;
    border: 1px solid ${ ( { theme } ) => theme.textColor };
    background-color: ${ ( { theme } ) => theme.getThemeRGBA(.5) };


`