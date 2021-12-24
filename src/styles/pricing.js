import styled from 'styled-components'
import { colors } from './theme'

export const DocumentHeader = styled.div`
    padding-bottom: 3.3rem;
    .title-document {
        font-size: 2.625rem;
        margin-bottom: 1rem;
    }
    .description-document {
        font-size: 1.563rem;
        font-weight: 300;
        color: ${colors.gray};
    }
`
