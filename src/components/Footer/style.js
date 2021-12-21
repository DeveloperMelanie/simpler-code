import styled from 'styled-components'
import { colors } from 'styles/theme'

export const FooterPage = styled.footer`
    padding: 3rem 1rem;
    background: ${colors.black};
    color: ${colors.white};
    .links {
        column-gap: 7.7rem;
        row-gap: 2rem;
        @media (max-width: 500px) {
            flex-direction: column;
            justify-content: center;
        }
    }
    .title {
        font-size: 1.375rem;
        font-weight: 700;
        margin-bottom: 2.2rem;
        @media (max-width: 500px) {
            margin-bottom: 1rem;
        }
    }
    .logo {
        margin-bottom: 5.8rem;
        @media (max-width: 500px) {
            margin-bottom: 1.5rem;
        }
    }
    .sublink {
        display: block;
        font-size: 0.813rem;
        font-weight: 300;
        color: ${colors.white} !important;
        margin-bottom: 0.15rem;
    }
    .social-media {
        gap: 0.65rem;
        img {
            width: 39px;
            height: 39px;
            object-fit: cover;
        }
        @media (max-width: 500px) {
            justify-content: center;
        }
    }
    .footer-container {
        flex-direction: column;
        column-gap: 6.7rem;
        row-gap: 2rem;
        @media (min-width: 500px) {
            flex-direction: row;
        }
    }
    .us {
        @media (max-width: 500px) {
            text-align: center;
        }
    }
`
