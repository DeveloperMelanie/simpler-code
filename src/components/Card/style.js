import styled from 'styled-components'
import { colors } from 'styles/theme'

export const CardItem = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 2.8rem 8.5rem;
    background: ${colors.white};
    box-shadow: 0 1px 4px 0 rgb(0 0 0);
    text-align: center;
    .title {
        font-size: 1.75rem;
    }
    .description {
        display: inline-block;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: normal;
        max-width: 15rem;
        margin: 0 auto;
        margin-bottom: 1.4rem;
    }
    @media (max-width: 500px) {
        padding: 2.8rem 0;
        width: 100%;
    }
`
