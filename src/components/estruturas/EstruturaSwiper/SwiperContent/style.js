'use client'

import styled from "styled-components"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';

export const SwiperContainerStyle = styled( Swiper )`
    width: 95%;
    min-width: 280px;
    max-width: 1200px;

    border-radius: 20px;
    border: 1px solid ${ ( { theme } ) => theme.textColor };
    background-color: ${ ( { theme } ) => theme.getThemeRGBA(.5) };

    cursor: grab;
`
export const SwiperSlideContentStyle = styled( SwiperSlide )`
    flex-shrink: 1;
    width: 100%;


`