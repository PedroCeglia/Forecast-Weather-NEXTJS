'use client'

import styled from "styled-components"

export const GoogleAutocompleteStyledComponent = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    max-width: 450px;
    width: 100%;
    min-width: 250px;


    input{
        width: 100%;
        padding: 10px 30px;
        border-radius: 10px;

        border: none;
        outline: none;
        background-color: transparent;

        background-color: #efefef8c;
        border: 1px solid #efefef;
    }
    span {
        margin-left: 5px;
        margin-bottom: 5px;
        font-size: 1em;
    }
`