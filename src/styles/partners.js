import styled from 'styled-components'
import { FormStyle } from './forms'
import { colors } from './theme'

export const MainSection = styled.div`
    padding: 0 1rem;
    padding-top: 7.3rem;
    padding-bottom: 6rem;
    background: ${colors.lightgray};
    text-align: center;
    font-size: 1.563rem;
    line-height: normal;
    .contain {
        max-width: 60rem;
        margin: 0 auto;
    }
    .title {
        font-size: 2.625rem;
        margin-bottom: 0.9rem;
    }
    span,
    p {
        margin-bottom: 1.3rem;
        font-weight: 300;
        color: ${colors.gray};
    }
    .contain-btn {
        display: flex;
        justify-content: center;
        margin-top: 6em;
    }
`
export const ActionSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    font-size: 1.063rem;
    font-weight: 300;
    top: -12.5rem;
    margin-bottom: -10.5rem;
    .contain-form {
        width: 100%;
        max-width: 41rem;
        margin: 0 auto;
        padding: 0 2.4rem;
        background: ${colors.white};
        text-align: center;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
    }
    .title {
        font-size: 2.5rem;
        margin: 3.563rem 0px 1.563rem 0;
        color: ${colors.gray};
    }
    .subtitle {
        margin-bottom: 3.188rem;
    }
    ${FormStyle}
    .send-btn {
        margin-top: 3.5rem;
        margin-bottom: 3.1rem;
        @media (max-width: 490px) {
            width: 100%;
        }
    }
`
