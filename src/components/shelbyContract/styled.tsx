"use client"

import styled from "styled-components";

export const BG = styled.div`
    position: fixed;
    height:100dvh;
    width:100dvw;
    background-color: #6a1717;

    display: flex;
    align-items: center;
`

export const ContractImage = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;
    display: block;
    
    border-radius: 3px;
`

export const TextBox = styled.div<{isMobile: boolean}>`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;

    font-family: "Neue Machina";
    color: #686868;
    font-size: ${props => props.isMobile ? "1rem" : "2.0vw"};

    text-align: center;
    line-height: ${props => props.isMobile ? "1.2rem" : "2.8vw"};
`

export const Tint = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;

    mix-blend-mode: lighten;
    border-radius: 3px;
    box-shadow: 0px 10px 100px 10px #000000;
`

export const TgLink = styled.a<{isMobile: boolean}>`
    z-index: 111;
    position: absolute;
    bottom: ${props => props.isMobile ? "8%" : "6%"};
    background-color: transparent;
    //border: 1px solid red;

    width: ${props => props.isMobile ? "15%" : "6%"};
    height: 3%;
    left: ${props => props.isMobile ? "43%" : "46%"};
`