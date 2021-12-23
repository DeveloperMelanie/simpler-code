import styled from 'styled-components'
import { colors } from 'styles/theme'

export const InfoSection = styled.div`
    padding-top: ${props => (props.paddingTop ? props.paddingTop : '2rem')};
    padding-bottom: ${props =>
        props.paddingBottom ? props.paddingBottom : '2rem'};
    ul {
        list-style: none;
        li {
            max-width: 34rem;
            color: ${colors.gray};
        }
        li::before {
            ${props =>
                props.listStyle
                    ? `content: '✔';
                    display: inline-block;
                    margin-left: -1.3em;
                    width: 1.3em;
                    color: ${colors.gray};`
                    : null}
        }
    }
    strong {
        font-weight: 700;
        color: ${colors.gray};
    }
    .title {
        margin-top: 2.9rem;
        max-width: 30rem;
        font-size: 2.563rem;
        margin-bottom: 4rem;
    }
    .content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        font-size: 1.25rem;
        font-weight: 300;
    }
    .contain-card {
        padding: 0 1rem;
        h3 {
            display: inline-block;
            margin-right: auto;
            font-size: 1.375rem;
            background: ${colors.important};
            margin-top: 2.7rem;
            margin-bottom: 1.4rem;
        }
    }
    .flex-row-reverse img {
        margin-right: 0 !important;
        margin-left: 2rem;
        @media (max-width: 540px) {
            margin-left: 0;
        }
    }
    .justify-content-between {
        @media (max-width: 1058px) {
            flex-direction: column;
            justify-content: center !important;
        }
    }
    .ml--7 {
        @media (min-width: 1200px) {
            padding-right: 7.5rem !important;
        }
    }
`
export const Image = styled.img`
    object-fit: cover;
    margin-right: 2rem;
    max-width: ${props => props.width || '100%'} !important;
    max-height: ${props => props.height || '100%'};
    height: auto;
    @media (max-width: 540px) {
        margin-right: 0;
    }
`
