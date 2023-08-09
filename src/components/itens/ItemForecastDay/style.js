'use client'

import styled from "styled-components"

export const ItemForecastDayStyle = styled.div`
    min-width: 80px;
    min-height: 120px;
    
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-left: ${ ( { isthefirst, theme } ) => ( isthefirst !== 0 ? "1px" : "none" ) + " solid " + theme.textColor };

    text-align: center;

    h4 {
        font-size: 1.05em;
        border-bottom: 1px solid ${ ( { theme } ) => theme.textColor };
        width: 100%;
        padding: 5px 0;
    }

    img {
        width: 30px;
        padding: 10px 0;
    }

    span {
        border-top: 1px solid ${ ( { theme } ) => theme.textColor };
        width: 100%;
        padding: 5px 0;
    }
` 