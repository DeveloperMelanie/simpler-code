import styled from 'styled-components'
import { colors } from 'styles/theme'

export const BrandSection = styled.div`
    padding: 4.8rem 1rem;
    width: 92%;
    margin: 0 auto;
    background: ${colors.gray};
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
    color: ${colors.white};
    padding-bottom: ${props => (props.extended ? '16rem' : '4.8rem')};
    .mb-6 {
        margin-bottom: 6rem;
    }
    .gap-7 {
        gap: ${props => (props.extended ? '5rem' : '4rem')};
        max-width: ${props => (props.extended ? '60rem' : '100%')};
        margin: 0 auto;
    }
`
