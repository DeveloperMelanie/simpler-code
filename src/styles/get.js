import styled from 'styled-components'
import { FormStyle } from './forms'
import { colors } from './theme'

export const FormContainer = styled.div`
    padding: 0 1rem;
    padding-top: 6rem;
    padding-bottom: 8.5rem;
    text-align: center;
    .header {
        max-width: 35rem;
        margin: 0 auto;
        .title {
            font-size: 2.375rem;
            margin-bottom: 1rem;
            strong {
                font-weight: bolder;
            }
        }
        font-size: 1.375rem;
        font-weight: 300;
        margin-bottom: 5.3rem;
        line-height: normal;
    }
    ${FormStyle}
    .notice {
        display: block;
        padding-top: 4rem;
        padding-bottom: 1.5rem;
        font-size: 0.813rem;
        font-weight: 300;
        color: ${colors.gray};
        a {
            color: ${colors.gray} !important;
        }
    }
`
