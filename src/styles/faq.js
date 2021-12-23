import styled from 'styled-components'
import { colors } from './theme'

export const CardsContainer = styled.div`
    padding: 0 1rem;
    padding-top: 6.5rem;
    padding-bottom: 5rem;
    text-align: center;
    background: ${colors.lightgray};
    .section-title {
        font-size: 2.375rem;
        margin-bottom: 6rem;
    }
`
export const Document = styled.div`
    font-weight: 300;
    padding: 2rem 1rem;
    max-width: 63rem;
    margin: 0 auto;
    font-size: 1.25rem;
    line-height: normal;
    h2 {
        font-size: 1.875rem;
        margin-bottom: 2.8rem;
    }
    h3 {
        font-size: 1.25rem;
        margin-bottom: 1.6rem;
    }
    ol {
        padding-left: 0;
    }
    p {
        margin: 0;
    }
`
