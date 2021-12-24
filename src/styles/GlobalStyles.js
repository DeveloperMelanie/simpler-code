import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf'
import PoppinsBold from './fonts/Poppins-Bold.ttf'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsSemiBold});
    }

    @font-face {
        font-family: 'Poppins-Bold';
        src: url(${PoppinsBold});
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

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
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

    .poppins-bold {
        font-family: 'Poppins-Bold', sans-serif;
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

    .card-li {
        font-size: 0.813rem;
        font-weight: 300;
        color: ${colors.gray};
        letter-spacing: 0.05em;
    }

    .no-wrap {
        white-space: nowrap !important;
    }

    .width-extend .title {
        max-width: 40rem !important;
        font-size: 2.25rem !important;
    }

    .max-width-100 {
        max-width: 100% !important;
        @media (max-width: 400px) {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }
`
