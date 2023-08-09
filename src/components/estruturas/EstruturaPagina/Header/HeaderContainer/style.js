'use client'

import styled from "styled-components"

export const HeaderContainerStyle = styled.header`
    position: fixed;
    top:0;
    left:0;

    width: 100%;
    height: 100px;
    background-color: ${ ( { theme } ) => theme.headerColor };

    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        font-size: 2em;
        font-weight: bold;
        text-decoration: none;
        color: ${ ( { theme } ) => theme.textColor };
    }
`