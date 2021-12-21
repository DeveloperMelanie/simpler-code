import styled from 'styled-components'
import { colors } from './theme'

export const MainSection = styled.div`
    padding: 0 1rem;
    padding-top: calc(8.5em + 126px);
    h1 {
        font-size: 4.25rem;
        @media (max-width: 350px) {
            font-size: 3.5rem;
        }
    }
    .subtitle {
        font-size: 1.563rem;
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
export const BrandSection = styled.div`
    padding: 4.8rem 0;
    width: 92%;
    margin: 0 auto;
    background: ${colors.gray};
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
    color: ${colors.white};
    .mb-6 {
        margin-bottom: 6rem;
    }
    .gap-7 {
        gap: 4rem;
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
