import styled from 'styled-components'
import { colors } from './theme'

export const Document = styled.div`
    background: ${colors.lightgray};
    padding: 6rem 1rem;
    padding-bottom: 7.5rem;
    text-align: center;
    .title {
        font-size: 1.75rem;
        letter-spacing: -0.02em;
    }
`
export const Body = styled.div`
    padding-top: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60rem;
    margin: 0 auto;
    text-align: left;
    font-weight: 300;
    .separator {
        padding-top: 4rem;
        text-align: left;
    }
    strong {
        display: inline-block;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    span,
    p {
        font-size: 1.125rem;
        word-break: break-word;
    }
    ol {
        list-style: none;
        padding-left: 0;
    }
    a {
        text-decoration: underline !important;
    }
    img {
        display: block;
        max-width: fit-content;
        width: 100%;
        height: auto;
        margin: 1rem auto;
        margin-top: 2.5rem;
    }
    .no-decoration,
    .no-decoration a {
        text-decoration: none !important;
    }
    .final {
        font-size: 1.563rem;
        padding-top: 4.3rem;
    }
`
