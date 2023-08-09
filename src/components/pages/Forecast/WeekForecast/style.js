'use client'

import styled from "styled-components"

export const ArticleWeekForecast = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${ ( { theme } ) => theme.articleForecastColor };
    border-radius: 15px;

    height: 80vh;
    width: 40vw;
    margin: 0 10px;
    margin-top: 20px;
    padding: 10px 0;

    @media all and ( max-width : 800px ) {
        width: 90vw;
        margin-left: 0;
    }

    h2 {
        font-size: 1.8em;
        margin: 20px 0;
    }

    /* Estiliza a barra de rolagem para navegadores Webkit (Chrome, Safari, Opera) */
    div::-webkit-scrollbar {
        width: 8px; /* Largura da barra de rolagem */
    }

    div::-webkit-scrollbar-track {
        background: ${ ( { theme } ) => theme.getThemeRGBA(.7) }; /* Cor de fundo da área do track */
        border-radius: 20px;
    }

    div::-webkit-scrollbar-thumb {
        background: ${ ( { theme } ) => theme.textColor };  /* Cor do indicador da posição atual */
        border-radius: 20px;
    }

    div::-webkit-scrollbar-thumb:hover {
        background: ${ ( { theme } ) => theme.scrollColor }; /* Cor do indicador ao passar o mouse */
    }
`

export const ListWeekForecast = styled.div`
    width: 90%;
    overflow-y: auto;
`