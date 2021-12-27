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
    .separator:first-child {
        padding-top: 0;
    }
    .separator {
        padding-top: 5rem;
        text-align: left;
    }
    .section {
        font-size: 1.25rem;
        margin-bottom: 2.5rem;
        font-weight: 600;
    }
    .description {
        display: inline-block;
        font-size: 1.125rem;
        font-weight: 300;
        color: ${colors.gray};
    }
    .minor-margin {
        margin-bottom: 1.2rem;
    }
    span,
    p {
        font-size: 1.125rem;
        font-weight: 300;
        color: ${colors.gray};
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
        max-width: fit-content;
        width: 100%;
        height: auto;
        margin-top: 2.5rem;
    }
    .no-decoration {
        text-decoration: none !important;
    }
`
