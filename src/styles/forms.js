import { css } from 'styled-components'
import { colors } from './theme'

export const FormStyle = css`
    form {
        max-width: 38rem;
        margin: 0 auto;
        .col-md-6 {
            flex: unset;
            @media (max-width: 768px) {
                width: 100%;
            }
        }
        .row-form {
            @media (max-width: 680px) {
                flex-direction: column;
            }
        }
        .form-group {
            text-align: left;
            label {
                display: block;
                margin-bottom: 0.4rem;
                font-size: 0.938rem;
                font-weight: 300;
            }
            input,
            select,
            textarea {
                width: 100%;
                border-radius: 0;
                border: none;
                border-bottom: 2px solid transparent;
                padding: 0.7rem 0.75rem;
                background: #f6f7f8;
                outline: none;
                font-size: 1.125rem;
                font-weight: 300;
                :focus {
                    border-bottom: 2px solid ${colors.black};
                }
            }
            select {
                cursor: pointer;
                color: ${colors.gray};
                option {
                    font-weight: 300;
                }
            }
            textarea {
                height: 126px;
                resize: none;
            }
            :hover {
                input,
                select,
                textarea {
                    border-bottom: 2px solid ${colors.black};
                }
            }
        }
        .error {
            background: #ffecec !important;
            border-bottom: 2px solid #ff4040 !important;
        }
        .select {
            position: relative;
            svg {
                position: absolute;
                right: 20px;
                transform: translateY(-50%);
                top: 50%;
                fill: rgba(72, 77, 83, 0.5);
            }
        }
    }
`
