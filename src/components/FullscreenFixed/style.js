import styled from 'styled-components'

export const FullScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    z-index: 100;
    background: rgba(15, 14, 14, 0.38);
    video {
        aspect-ratio: 16/9;
        max-width: 979px;
        width: 100%;
        height: auto;
    }
    .close {
        position: absolute;
        top: 90px;
        right: 5%;
        cursor: pointer;
    }
`
