'use client'

import styled from "styled-components"

// Estilos do botão switch
export const SwitchThemeButton = styled.button`
  position: relative;
  width: 61px;
  height: 30px;

  border: 1px solid ${ ( { theme } )  => theme.textColor} ;
  border-radius: 15px;
  cursor: pointer;

  background-color: ${ ( { theme } )  => theme.mainColor};
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
  }

  /* Estilo do círculo deslizante */
  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: ${ ( { theme } )  => theme.type === "dark" ? '32px' : '2px'};
    
    width: 26px;
    height: 26px;
    
    border-radius: 50%;
    background-color: ${ ( { theme } )  => theme.textColor};
    
    transition: left 0.3s ease;
  }
`;
