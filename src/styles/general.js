import styled from 'styled-components'
import { colors } from './theme'

export const MainSection = styled.div`
    padding: 0 1rem;
    padding-top: 8.5em;
    h1 {
        font-size: 4.25rem;
        @media (max-width: 400px) {
            font-size: 3.9rem;
        }
        @media (max-width: 350px) {
            font-size: 3.5rem;
        }
    }
    strong {
        font-weight: 700;
        color: ${colors.black};
    }
    .subtitle {
        display: inline-block;
        max-width: 27rem;
        font-size: 1.563rem;
        line-height: 1.4em;
        font-weight: 300;
        color: ${colors.gray};
    }
    .separator {
        padding-bottom: 10em;
    }
    .small-text {
        line-height: normal;
        font-size: 0.938rem;
        font-weight: 300;
        color: ${colors.gray} !important;
    }
    .pb-7 {
        padding-bottom: 4rem;
    }
    .pt-7 {
        padding-top: 3rem;
    }
`
export const Advertisement = styled.div`
    padding: 9rem 1rem;
    text-align: center;
    h2 {
        font-size: 2.5rem;
        margin-bottom: 4rem;
    }
`
