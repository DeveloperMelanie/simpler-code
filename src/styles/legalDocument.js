import styled from 'styled-components'
import { colors } from './theme'

export const LegalDocument = styled.div`
    padding: 0 1rem;
    padding-top: 2.5rem;
    padding-bottom: 6rem;
    max-width: 61rem;
    margin: 0 auto;
    text-align: center;
    .title {
        font-size: 2.75rem;
        margin-bottom: 3.5rem;
    }
`
export const Body = styled.div`
    text-align: left;
    color: ${colors.gray};
    font-size: 1rem;
    line-height: normal;
    p {
        margin-bottom: 1rem;
    }
    span,
    p,
    em {
        font-weight: 300;
    }
    strong {
        display: block;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    a {
        text-decoration: underline !important;
        color: ${colors.gray} !important;
    }
    img {
        max-width: fit-content;
        width: 100%;
        height: auto;
    }
    .no-decoration {
        text-decoration: none !important;
    }
`
