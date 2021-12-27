import styled from 'styled-components'
import { colors } from 'styles/theme'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 1rem;
    .card {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        padding: 2.8rem 6rem;
        max-width: 461px;
        width: 100%;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5),
            0 1px 4px rgba(0, 0, 0, 0.5);
        letter-spacing: 0.05em;
        font-size: 0.813rem;
        h2 {
            font-size: 1.688rem;
            letter-spacing: 0.08em;
            margin-bottom: 3.5rem;
        }
        h3 {
            font-size: 2.438rem;
            color: ${colors.gray};
            letter-spacing: 0.05em;
        }
        span,
        p {
            font-size: 0.813rem;
            font-weight: 700;
            color: ${colors.gray};
            margin: 0;
        }
        ul,
        ol {
            text-align: left;
            padding-top: 3rem;
        }
        li {
            font-weight: 300;
            color: ${colors.gray};
            letter-spacing: 0.05em;
        }
        .container-btn {
            display: flex;
            justify-content: center;
            margin-top: 2.7rem;
        }
        @media (max-width: 500px) {
            padding: 2.8rem 1rem;
        }
    }
    .secondary-card {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        padding: 2.8rem 2.6rem;
        padding-left: calc(2.6rem + 6px);
        background: #ababab;
        border-radius: 0.25rem;
        margin-left: -6px;
        max-width: 313px;
        width: 100%;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3),
            0 1px 4px rgba(0, 0, 0, 0.3);
        h2 {
            font-size: 1.688rem;
            letter-spacing: 0.08em;
            margin-bottom: 3rem;
        }
        span,
        p {
            font-size: 0.813rem;
            color: ${colors.gray};
            letter-spacing: 0.05em;
            font-weight: 300;
            margin: 0;
        }
        .content {
            max-width: 10.5rem;
            margin: 0 auto;
        }
        .container-btn {
            display: flex;
            justify-content: center;
            margin-top: 4.3rem;
        }
        @media (max-width: 817px) {
            margin-left: 0;
            max-width: 461px;
        }
        @media (max-width: 500px) {
            padding: 2.8rem 1rem;
        }
    }
    @media (max-width: 817px) {
        flex-direction: column;
    }
`
