"use client"

import styled from "styled-components"

export const Container = styled.div`
    background-image: url('/translator/seamlessBG.jpg');
    background-size: cover;

    
    display: grid;
    width: 100%;
    height: 100%;
    padding:0;
    margin: 0;
    position: relative;
    overflow: overlay;
    align-items: center;
    
    @media (min-width: 780px){
        grid-template-columns: 5fr 1fr 5fr;
    }  

`

export const TranslatorBox = styled.div`
    position: relative;
    margin: 5%;
`

export const SwitchLanguageButton = styled.div`
    width: 100px;
    margin: auto;
    img {
        width: 100%;

        @media (min-width: 780px) {
            transform: rotate(90deg);
        }
    }
`

export const BG = styled.img`
    object-fit: cover;
    width: 100%
`