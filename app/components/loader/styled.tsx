import styled from "styled-components";

export const Spinner = styled.img`
    width: 150px;
    height: 150px;

    background: radial-gradient(white 0%, transparent 70%);

    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out; 

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export const BG = styled.div`
    z-index: 1111111;
    position: fixed;
    top:0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
    background-color: white;
`