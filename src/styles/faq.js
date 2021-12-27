import styled from 'styled-components'
import { colors } from './theme'

export const CardsContainer = styled.div`
    padding: 0 1rem;
    padding-top: 6.5rem;
    padding-bottom: 5rem;
    text-align: center;
    background: ${colors.lightgray};
    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.88rem;
    }
    .section-title {
        font-size: 2.375rem;
        margin-bottom: 6rem;
    }
`
export const Document = styled.div`
    font-weight: 300;
    padding: 2rem 1rem;
    padding-bottom: 4.4rem;
    max-width: 62rem;
    margin: 0 auto;
    font-size: 1.25rem;
    line-height: normal;
    h2 {
        font-size: 1.875rem;
    }
    h3 {
        font-size: 1.25rem;
        margin-bottom: 1.6rem;
        margin-top: 2.8rem;
    }
    ol {
        padding-left: 0;
        margin-left: 1.18rem;
    }
    p {
        margin: 0;
    }
    a {
        text-decoration: underline !important;
    }
    .special-title {
        margin-top: 4.5rem;
        margin-bottom: 3.4rem;
        font-size: 1.75rem;
        font-weight: 300 !important;
    }
    .no-decoration,
    .no-decoration a {
        text-decoration: none !important;
    }
    .section {
        font-size: 2.125rem;
        margin-top: 5.7rem;
        padding-bottom: 0.2rem;
    }
    img {
        max-width: fit-content;
        width: 100%;
        height: auto;
    }
`
