"use client"

import styled from "styled-components"

export const TextArea = styled.textarea`
    position: absolute;
    margin: 0;

    background-color: transparent;
    border: none;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
    

    &::-webkit-scrollbar {
        display: none;
    }
/* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    

    &:disabled{
        color: black !important;
        background-color: transparent;
        opacity: 1;
        cursor: not-allowed;
    }
`

export const CopyButton = styled.button<{src: string;}>`
    border: none;
    background: url(${props => props.src}) no-repeat;
    background-size: cover;

    transition: transform .3s ease-out;

    &:active {
    /* font-size: 1rem; */
    transform: scale(.5);
    /* box-shadow: 0 3px 15px -2px; */
}
`