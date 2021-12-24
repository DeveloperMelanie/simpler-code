import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { colors } from 'styles/theme'

const button = css`
    position: relative;
    padding: ${props => (props.padding ? props.padding : '0.7rem 0.7rem')};
    background: ${colors.black};
    border: 1px solid ${colors.black};
    color: ${colors.white} !important;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${props => (props.fontSize ? props.fontSize : '0.938rem')};
    font-weight: 700;
    letter-spacing: 0.02em;
    border-radius: 6px;
    white-space: nowrap;
    transition: all 0.2s ease;
    ${props =>
        props.hover
            ? `:hover {
                    background: ${colors.white};
                    color: ${colors.black} !important;
                }`
            : null}
    @media (max-width: 400px) {
        padding: 0.7rem 3rem;
        max-width: fit-content;
        width: 100%;
    }
`
export const BTNLink = styled(Link)`
    ${button}
`
export const BTN = styled.button`
    ${button}
`
