import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsSemiBold});
    }

    html {
        scroll-behavior: auto !important;
    }

    body {
        font-family: 'Lato', sans-serif !important;
        color: ${colors.black} !important;
    }

    main {
        padding-top: 126px;
    }

    a {
        color: ${colors.black} !important;
        text-decoration: none !important;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700 !important;
    }

    .important {
        background: ${colors.important};
    }

    .important-lite {
        background: ${colors.importantLite};
    }

    .bg-lightgray {
        background: ${colors.lightgray};
    }

    .white {
        color: ${colors.white} !important;
    }

    .arial {
        font-family: Arial, Helvetica, sans-serif !important;
    }

    .poppins {
        font-family: 'Poppins', sans-serif;
    }

    .btn-text {
        position: absolute;
        top: 1px;
        right: 5px;
        font-size: 0.5rem;
        font-family: 'Lato', sans-serif;
        font-weight: 900;
    }

    .w-90 {
        max-width: 90rem;
    }

    .image-decoration {
        img {
            border-radius: 5px 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.5);
            border-style: solid;
            border-color: ${colors.white};
            border-width: 2px 2px;
            overflow: hidden;
        }
    }

    .mt--2 {
        margin-top: -2rem;
    }

    .line-height-normal {
        line-height: normal !important;
    }

    .ms-6 {
        margin-left: 5.5rem !important;
        @media (max-width: 1120px) {
            margin-left: 0 !important;
            padding: 0;
        }
    }

    .pb-6 {
        padding-bottom: 6rem !important;
    }

    .pt-5-responsive {
        @media (max-width: 1000px) {
            padding-top: 3rem !important;
        }
    }

    .col-auto {
        @media (max-width: 500px) {
            padding: 0 !important;
        }
    }
`
